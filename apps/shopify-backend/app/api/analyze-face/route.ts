import { NextRequest, NextResponse } from "next/server";
import { MockAIProvider } from "@stylique/ai";

const ai = new MockAIProvider();

export async function POST(request: NextRequest) {
  try {
    const { imageBase64, imageMimeType } = await request.json();

    if (!imageBase64 || !imageMimeType) {
      return NextResponse.json({ error: "Missing image data" }, { status: 400 });
    }

    // Use Gemini if API key is configured, otherwise mock
    let provider: typeof ai;
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && process.env.AI_PROVIDER === "gemini") {
      const { GeminiAIProvider } = await import("@stylique/ai");
      provider = new GeminiAIProvider(geminiKey) as unknown as typeof ai;
    } else {
      provider = ai;
    }

    const analysis = await provider.analyzeFace(imageBase64, imageMimeType);

    // Attach a fake ID and metadata
    const result = {
      ...analysis,
      id: `analysis-${Date.now()}`,
      shopperId: "guest",
      imageUrl: "", // Don't store the image
      createdAt: new Date(),
    };

    return NextResponse.json({ analysis: result });
  } catch (error) {
    console.error("[analyze-face] Error:", error);
    return NextResponse.json(
      { error: "Face analysis failed. Please try again." },
      { status: 500 }
    );
  }
}
