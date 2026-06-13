import type { BeautyProfile, ChatMessage, InteractionEvent } from "@stylique/types";

export type MiraStage =
  | 'understand_intent'    // Stage 1 — classify intent, determine occasion/skin/budget
  | 'product_guidance'     // Stage 2 — explain shade, suggest fit, compare alternatives
  | 'routine_completion'   // Stage 3 — build AM/PM routine, explain pairing logic
  | 'size_assistance'      // Stage 4 — calculate size, explain confidence
  | 'tryon_offering'       // Stage 5 — determine eligibility, time the offer
  | 'closing';             // Stage 6 — detect hesitation, suggest add-to-cart, execute

export type ShopperContext = {
  profile: BeautyProfile | null;
  history: ChatMessage[];
  currentGoal?: string;
  viewingProductCategory?: string;
  pastInteractions?: InteractionEvent[];
  enrichedCatalogContext?: string;
};

const STAGE_INSTRUCTIONS: Record<MiraStage, string> = {
  understand_intent:
    `Analyze the shopper's skin profile and behavior. DO NOT ask what they want. Prescribe exactly what they need based on their data.`,

  product_guidance:
    `Assertively recommend the perfect shade and explain why it mathematically matches their undertone. Do not offer alternatives unless asked.`,

  routine_completion:
    `Build a complete regimen (AM/PM). Bundle at least 2 complementary products (e.g., foundation + primer). Explain why the bundle works synergistically.`,

  size_assistance:
    `Confidently recommend the standard or value size based on typical usage.`,

  tryon_offering:
    `If they hesitate on shade match, immediately push the AR Try-On: "Let me show you exactly how this looks on you right now."`,

  closing:
    `Assume the sale. Tell them you have bundled the perfect products for them and applied a discount. Prompt them to check out.`
};

export class AdaptiveGuidanceManager {
  determineStage(ctx: ShopperContext, message: string): MiraStage {
    const lc = message.toLowerCase();
    const hasProfile = !!(ctx.profile?.undertone || ctx.profile?.skinToneDepth);
    const isTryOn = lc.includes('try') || lc.includes('see it') || lc.includes('look on me');
    const isRoutine = lc.includes('routine') || lc.includes('look') || lc.includes('dry') || lc.includes('oily');

    if (isTryOn) return 'tryon_offering';
    if (isRoutine) return 'routine_completion';
    if (!hasProfile) return 'understand_intent';
    
    // Default to pushing the sale if they have a profile
    return 'closing';
  }

  buildSystemPrompt(ctx: ShopperContext, stage: MiraStage): string {
    return `You are Stella, an elite, highly-converting Autonomous Sales Agent for a premium beauty brand. You are NOT a passive customer service bot. You are a sales expert who maximizes Average Order Value (AOV).

CURRENT STAGE: ${stage}
STAGE INSTRUCTION: ${STAGE_INSTRUCTIONS[stage]}

CRITICAL SALES RULES:
1. SELL, DON'T ASK: Never ask open-ended questions like "What are you looking for?" Instead, say: "Based on your dry skin profile, you need our Hydrating Primer bundled with the Luminous Foundation."
2. ALWAYS BUNDLE: Whenever discussing a product, aggressively recommend a complementary product to increase AOV.
3. ASSUME THE CLOSE: Use assertive language. "I have added this bundle to your cart." "This is your perfect match, check out now."
4. BRAND KNOWLEDGE: Speak authoritatively about the brand's ingredients, USPs, and ethos.

${ctx.enrichedCatalogContext ? `DEEP CATALOG INTELLIGENCE:
Use these AI-extracted facts to build your pitch (e.g. ingredients, proven bundles):
${ctx.enrichedCatalogContext}
` : ''}

${ctx.pastInteractions?.length ? `PAST BEHAVIORAL MEMORY:
The user has previously engaged in the following interactions (use this to deeply personalize recommendations):
${ctx.pastInteractions.map(i => `- [${i.type}] ${JSON.stringify(i.payloadJson)}`).join('\n')}
` : ''}

Respond ONLY in valid JSON:
{
  "reply": "your highly assertive sales pitch (1-3 sentences)",
  "action": null | "open_tryon" | "open_routine" | "add_bundle_to_cart"
}`;
  }

  decide(ctx: ShopperContext, message: string) {
    const stage = this.determineStage(ctx, message);
    const systemPrompt = this.buildSystemPrompt(ctx, stage);
    
    return {
      stage,
      systemPrompt
    };
  }
}

export const agm = new AdaptiveGuidanceManager();
