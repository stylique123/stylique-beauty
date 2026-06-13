import { NextResponse } from 'next/server';
import { prisma } from '@stylique/db';
import { GeminiAIProvider } from '@stylique/ai';

// Initialize the provider with the Gemini API key from env
const geminiProvider = new GeminiAIProvider(process.env.GEMINI_API_KEY || 'dummy_key');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, shopDomain } = body;

    if (!url || !shopDomain) {
      return new NextResponse('Missing url or shopDomain', { status: 400 });
    }

    const shop = await prisma.shop.findUnique({ where: { shopifyDomain: shopDomain } });
    if (!shop) {
      return new NextResponse('Shop not found', { status: 404 });
    }

    // Call the LLM to extract the brand persona from the URL
    const persona = await geminiProvider.extractBrandPersona(url);

    // Save it to the shop's database record
    await prisma.shop.update({
      where: { id: shop.id },
      data: { brandPersonaJson: persona as any },
    });

    return NextResponse.json({ success: true, persona });
  } catch (error) {
    console.error('Failed to ingest brand persona:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
