import { NextRequest, NextResponse } from "next/server";
import { MockAIProvider } from "@stylique/ai";
import { DEMO_PRODUCTS } from "@stylique/beauty-engine";
import type { BeautyProfile, RoutineType } from "@stylique/types";

export async function POST(request: NextRequest) {
  try {
    const {
      profile,
      routineType,
      occasion,
    }: { profile: BeautyProfile; routineType: RoutineType; occasion?: string } =
      await request.json();

    let provider: MockAIProvider;
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey && process.env.AI_PROVIDER === "gemini") {
      const { GeminiAIProvider } = await import("@stylique/ai");
      provider = new GeminiAIProvider(geminiKey) as unknown as MockAIProvider;
    } else {
      provider = new MockAIProvider();
    }

    const routineBase = await provider.generateRoutine(
      profile,
      routineType,
      DEMO_PRODUCTS,
      occasion
    );

    const routine = {
      ...routineBase,
      id: `routine-${Date.now()}`,
      shopperId: "guest",
      createdAt: new Date(),
    };

    return NextResponse.json({ routine });
  } catch (error) {
    console.error("[routine] Error:", error);
    return NextResponse.json(
      { error: "Routine generation failed" },
      { status: 500 }
    );
  }
}
