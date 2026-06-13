import { NextRequest, NextResponse } from "next/server";
import { MockAIProvider } from "@stylique/ai";
import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import type { BeautyProfile } from "@stylique/types";

export async function POST(request: NextRequest) {
  try {
    const { profile, productId }: { profile: BeautyProfile; productId: string } =
      await request.json();

    const product = DEMO_PRODUCTS.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    let provider: MockAIProvider;
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && process.env.AI_PROVIDER === "gemini") {
      const { GeminiAIProvider } = await import("@stylique/ai");
      provider = new GeminiAIProvider(geminiKey) as unknown as MockAIProvider;
    } else {
      provider = new MockAIProvider();
    }

    const result = await provider.matchShades(profile, product);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("[shade-match] Error:", error);
    return NextResponse.json(
      { error: "Shade matching failed" },
      { status: 500 }
    );
  }
}
