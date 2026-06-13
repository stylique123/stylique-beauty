import { NextRequest, NextResponse } from "next/server";
import { MockAIProvider } from "@stylique/ai";
import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import type { BeautyProfile } from "@stylique/types";

export async function POST(request: NextRequest) {
  try {
    const { profile, goal }: { profile: BeautyProfile; goal: string } = await request.json();

    if (!profile) {
      return NextResponse.json({ error: "Profile required" }, { status: 400 });
    }

    let provider: MockAIProvider;
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && process.env.AI_PROVIDER === "gemini") {
      const { GeminiAIProvider } = await import("@stylique/ai");
      provider = new GeminiAIProvider(geminiKey) as unknown as MockAIProvider;
    } else {
      provider = new MockAIProvider();
    }

    const context = goal
      ? `Shopper goal: ${goal}. Focus recommendations on relevant products for this goal.`
      : "General beauty recommendations for this shopper.";

    const recommendations = await provider.recommendProducts(
      profile,
      DEMO_PRODUCTS,
      context
    );

    return NextResponse.json({ recommendations });
  } catch (error) {
    console.error("[recommendations] Error:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}
