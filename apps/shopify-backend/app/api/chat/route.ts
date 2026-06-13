import { NextRequest, NextResponse } from "next/server";
import { MockAIProvider, agm } from "@stylique/ai";
import type { BeautyProfile, ChatMessage, FaceAnalysisResult, ShopperGoal } from "@stylique/types";
import { checkAndIncrementUsage } from "@/lib/usage";
import { prisma } from "@stylique/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, profile, faceAnalysis, goal, previousMessages } = body;
    const sessionId = body.sessionId || "anon_" + Math.random().toString(36).substr(2, 9);
    
    // Bug 4 Fix: Fallback to anonymous sessionId if shopperId is missing
    const shopperId = profile?.shopperId || sessionId;
    const shopId = profile?.brandId;

    if (shopId) {
      const usage = await checkAndIncrementUsage(shopId);
      if (!usage.allowed) {
        return NextResponse.json({ reply: "Our styling service is currently unavailable. (Brand usage limits exceeded).", action: null, stage: "understand_intent" });
      }

      // Circuit Breaker: Max 20 messages per session to prevent API bankruptcy
      if (previousMessages && previousMessages.length > 20) {
        return NextResponse.json({ 
          reply: "I've loved chatting with you! To keep our styling service fast for everyone, I need to wrap up this session. Let me know if you want to add these items to your cart!", 
          action: "open_routine", 
          stage: "routine_completion" 
        });
      }

      // Regex Guardrail: Block obvious non-commerce queries instantly without hitting Gemini
      const nonCommerceRegex = /\b(politics|religion|therapist|suicide|joke|weather|code|programming|recipe)\b/i;
      if (nonCommerceRegex.test(message)) {
        return NextResponse.json({ 
          reply: "I'm Stella, your personal beauty advisor! I can only help with cosmetics, skincare routines, and shade matching. How can I glow up your look today?", 
          action: null, 
          stage: "understand_intent" 
        });
      }

      // 1. Intelligence Loop: Log basic interaction
      await prisma.interactionEvent.create({
        data: {
          shopId: shopId,
          shopperId: shopperId,
          type: "chat",
          payloadJson: { message, isAnonymous: !profile?.shopperId } as any
        }
      });

      // 2. Intelligence Loop: Detect Competitor Mentions
      const messageLower = message.toLowerCase();
      const competitors = ['fenty', 'nars', 'rare beauty', 'charlotte tilbury', 'glossier'];
      for (const comp of competitors) {
        if (messageLower.includes(comp)) {
          await prisma.interactionEvent.create({
            data: {
              shopId: shopId,
              shopperId: shopperId,
              type: "competitor_mention",
              payloadJson: { competitor: comp, context: message } as any
            }
          });
        }
      }

      // 3. Intelligence Loop: Detect Hesitation / Lost Sale Risk
      if (messageLower.includes('too expensive') || messageLower.includes('not my shade')) {
         await prisma.interactionEvent.create({
            data: {
              shopId: shopId,
              shopperId: shopperId,
              type: "hesitation",
              payloadJson: { reason: messageLower.includes('expensive') ? 'price' : 'shade_match', context: message } as any
            }
          });
      }
    }

    let pastInteractions: any[] = [];
    if (shopId) {
      pastInteractions = await prisma.interactionEvent.findMany({
        where: { shopId, shopperId },
        orderBy: { createdAt: 'desc' },
        take: 10
      });
    }

    const ctx = {
      profile,
      history: previousMessages,
      currentGoal: goal || undefined,
      pastInteractions,
    };

    const decision = agm.decide(ctx, message);

    let provider;
    const geminiKey = process.env.GEMINI_API_KEY;
    
    // Bug 5 Fix: Log missing Gemini API key to warn the Merchant
    if (geminiKey && process.env.AI_PROVIDER === "gemini") {
      const { GeminiAIProvider } = await import("@stylique/ai");
      provider = new GeminiAIProvider(geminiKey);
    } else {
      if (shopId) {
        // Log the silent failure to the database so the Super Admin / Merchant knows
        await prisma.interactionEvent.create({
          data: {
            shopId: shopId,
            shopperId: shopperId,
            type: "system_alert",
            payloadJson: { issue: "Gemini API key missing or invalid. Falling back to Mock AI.", level: "warning" } as any
          }
        });
      }
      provider = new MockAIProvider();
    }

    if (provider.providerName === 'mock') {
      let reply = "I can certainly help you with that!";
      let action = null;
      
      if (decision.stage === 'tryon_offering') {
        reply = "I'd love to help you find your exact shade. Let's analyze your skin.";
        action = "open_tryon";
      } else if (decision.stage === 'routine_completion') {
        reply = "I can definitely help you build a complete look. Let me open the Routine Builder for you.";
        action = "open_routine";
      } else if (decision.stage === 'product_guidance') {
        reply = `Since you have ${profile?.undertone || 'beautiful'} undertones, I'd recommend sticking to warmer shades.`;
      } else if (decision.stage === 'understand_intent') {
        reply = "I'm here to guide you. A quick skin analysis is the best first step!";
      }
      
      const { RecommendationGuardrails } = await import("@stylique/beauty-engine");
      reply = RecommendationGuardrails.validateAdvisorOutput(reply);
      
      return NextResponse.json({ reply, action, stage: decision.stage });
    }

    return NextResponse.json({ reply: "Gemini integration active.", action: null });

  } catch (error) {
    console.error("[chat] Error:", error);
    return new Response("Failed to process chat message", { status: 500 });
  }
}
