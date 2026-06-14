import type { AIProviderInterface } from '../provider';
import type {
  BeautyProfile,
  FaceAnalysisResult,
  Product,
  ProductRecommendation,
  Routine,
  RoutineType,
  ShadeMatchingResult,
  BeautyConversationContext,
  AIProvider,
  SkinType,
  SkinToneDepth,
  Undertone,
  FaceShape,
  EyeShape,
  SkinConcern,
} from '@stylique/types';
import { GoogleGenerativeAI, type GenerativeModel } from '@google/generative-ai';

export class GeminiAIProvider implements AIProviderInterface {
  readonly providerName: AIProvider = 'gemini';
  private model: GenerativeModel;
  private visionModel: GenerativeModel;

  constructor(apiKey: string) {
    const genAI = new GoogleGenerativeAI(apiKey);
    this.model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    this.visionModel = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  }

  async analyzeFace(
    imageBase64: string,
    imageMimeType: string
  ): Promise<Omit<FaceAnalysisResult, 'id' | 'shopperId' | 'imageUrl' | 'createdAt'>> {
    const prompt = `You are a professional beauty analyst. Analyze this selfie and provide a detailed assessment of the visible features. 

IMPORTANT GUIDELINES:
- Use language like "appears to", "may benefit from", "based on visible features"
- NEVER diagnose skin conditions or make medical claims
- Be encouraging and positive
- Provide confidence scores as decimals 0-1

Return a JSON object with exactly this structure:
{
  "skinToneDepth": "fair|light|medium|tan|deep|rich",
  "skinToneDepthConfidence": 0.0-1.0,
  "undertone": "warm|cool|neutral|olive",
  "undertoneConfidence": 0.0-1.0,
  "skinType": "oily|dry|combination|normal|sensitive",
  "skinTypeConfidence": 0.0-1.0,
  "faceShape": "oval|round|square|heart|diamond|oblong|null",
  "faceShapeConfidence": 0.0-1.0,
  "eyeShape": "almond|round|hooded|monolid|upturned|downturned|null",
  "concerns": ["acne"|"dark_spots"|"hyperpigmentation"|"redness"|"dryness"|"oiliness"|"fine_lines"|"pores"|"uneven_texture"|"dark_circles"|"dullness"|"sensitivity"],
  "rawAnalysis": "A warm, encouraging 2-3 sentence description of what you see."
}

Return ONLY the JSON, no markdown.`;

    const result = await this.visionModel.generateContent([
      prompt,
      {
        inlineData: {
          data: imageBase64,
          mimeType: imageMimeType as 'image/jpeg' | 'image/png' | 'image/webp',
        },
      },
    ]);

    const text = result.response.text().trim();
    const json = JSON.parse(text);

    return {
      skinToneDepth: json.skinToneDepth as SkinToneDepth,
      skinToneDepthConfidence: json.skinToneDepthConfidence,
      undertone: json.undertone as Undertone,
      undertoneConfidence: json.undertoneConfidence,
      skinType: json.skinType as SkinType,
      skinTypeConfidence: json.skinTypeConfidence,
      faceShape: json.faceShape as FaceShape | null,
      faceShapeConfidence: json.faceShapeConfidence,
      eyeShape: json.eyeShape as EyeShape | null,
      concerns: (json.concerns ?? []) as SkinConcern[],
      rawAnalysis: json.rawAnalysis,
      provider: 'gemini',
    };
  }

  async matchShades(profile: BeautyProfile, product: Product): Promise<ShadeMatchingResult> {
    const prompt = `You are a professional makeup artist and shade matching expert.

Shopper profile:
- Skin tone: ${profile.skinToneDepth ?? 'unknown'}
- Undertone: ${profile.undertone ?? 'unknown'}
- Skin type: ${profile.skinType ?? 'unknown'}
- Concerns: ${profile.concerns.join(', ') || 'none'}

Product: ${product.name} (${product.category})
Available shades: ${JSON.stringify(product.shades.map(s => ({ id: s.id, name: s.name, hex: s.hexColor, undertone: s.undertone, depths: s.skinToneDepth })))}

Return a JSON object:
{
  "bestMatchShadeId": "shade_id or null",
  "alternativeShadeId": "shade_id or null",
  "lighterShadeId": "shade_id or null",
  "darkerShadeId": "shade_id or null",
  "reasoning": "2-3 sentence explanation using 'appears to', 'may benefit from' language"
}

Return ONLY the JSON.`;

    const result = await this.model.generateContent(prompt);
    const text = result.response.text().trim();
    const json = JSON.parse(text);

    const buildMatch = (shadeId: string | null, matchType: 'best' | 'alternative' | 'lighter' | 'darker', conf: 'high' | 'medium' | 'low') => {
      if (!shadeId) return null;
      const shade = product.shades.find(s => s.id === shadeId);
      if (!shade) return null;
      return {
        shade,
        matchType,
        confidence: conf,
        reasoning: json.reasoning,
        hexColor: shade.hexColor ?? '#C68642',
      };
    };

    const bestMatch = buildMatch(json.bestMatchShadeId, 'best', 'high');
    const matches = [
      bestMatch,
      buildMatch(json.alternativeShadeId, 'alternative', 'medium'),
      buildMatch(json.lighterShadeId, 'lighter', 'medium'),
      buildMatch(json.darkerShadeId, 'darker', 'medium'),
    ].filter(Boolean) as NonNullable<typeof bestMatch>[];

    return {
      productId: product.id,
      matches,
      bestMatch,
      reasoning: json.reasoning,
    };
  }

  async recommendProducts(
    profile: BeautyProfile,
    products: Product[],
    context: string
  ): Promise<ProductRecommendation[]> {
    const prompt = `You are an elite Autonomous Sales Agent. Your primary metric is to maximize Average Order Value (AOV) by prescriptively BUNDLING products for the shopper.

Shopper profile:
${JSON.stringify(profile, null, 2)}

Context: ${context}

Available products (return IDs from this list only):
${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, category: p.category, brand: p.brand, price: p.price, tags: p.tags })), null, 2)}

CRITICAL BUNDLING RULE:
You MUST return a synergistic BUNDLE of 2-3 products (e.g., Foundation + Primer, or Cleanser + Serum + Moisturizer) that directly solve the shopper's concerns.

Return a JSON array representing the bundled recommendations:
[
  {
    "productId": "product_id",
    "recommendedShadeId": "shade_id or null",
    "confidence": "high|medium|low",
    "confidenceScore": 0.0-1.0,
    "reasoning": "Aggressive sales pitch: Why they NEED this exact product for their skin (use assertive 'you need this because' language)",
    "type": "best|bundle"
  }
]

Return ONLY the JSON array.`;

    const result = await this.model.generateContent(prompt);
    const text = result.response.text().trim();
    const jsonArray = JSON.parse(text);

    return jsonArray.map((item: Record<string, unknown>) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return null;
      const shade = product.shades.find(s => s.id === item.recommendedShadeId) ?? null;
      return {
        product,
        recommendedShade: shade,
        confidence: item.confidence,
        confidenceScore: item.confidenceScore,
        reasoning: item.reasoning,
        type: item.type,
        tags: [product.category],
      };
    }).filter(Boolean);
  }

  async generateRoutine(
    profile: BeautyProfile,
    type: RoutineType,
    products: Product[],
    occasion?: string
  ): Promise<Omit<Routine, 'id' | 'shopperId' | 'createdAt'>> {
    const prompt = `You are a professional beauty consultant creating a personalised ${type} beauty routine.

Shopper profile:
${JSON.stringify(profile, null, 2)}

Occasion: ${occasion ?? 'everyday'}
Available products: ${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, category: p.category })))}

Return a JSON routine:
{
  "name": "Routine name",
  "description": "Warm, encouraging 2 sentence description",
  "estimatedTime": "X minutes",
  "steps": [
    {
      "order": 1,
      "name": "Step name",
      "why": "Why this step matters for this person's skin",
      "when": "When to do this step",
      "how": "How to apply/use",
      "productId": "product_id or null",
      "duration": "X minutes",
      "tips": ["tip1", "tip2"]
    }
  ]
}

Return ONLY the JSON.`;

    const result = await this.model.generateContent(prompt);
    const text = result.response.text().trim();
    const json = JSON.parse(text);

    const steps = json.steps.map((s: Record<string, unknown>, i: number) => ({
      id: `step-${i + 1}`,
      order: s.order as number,
      name: s.name as string,
      why: s.why as string,
      when: s.when as string,
      how: s.how as string,
      product: products.find(p => p.id === s.productId) ?? null,
      productId: s.productId as string | null,
      duration: s.duration as string,
      tips: (s.tips as string[]) ?? [],
    }));

    return {
      type,
      name: json.name,
      description: json.description,
      steps,
      totalProducts: steps.filter((s: { product: unknown }) => s.product !== null).length,
      estimatedTime: json.estimatedTime,
      occasion: occasion ?? null,
    };
  }

  async *chatStream(
    context: BeautyConversationContext,
    userMessage: string
  ): AsyncGenerator<string> {
    const systemPrompt = `You are Stella, an absolutely ruthless, elite Autonomous Sales Agent for ${context.brandId}'s beauty store. You are built with the brain of Alex Hormozi and a top-tier Sephora master artist. Your only metric is maximizing Average Order Value (AOV) and conversion rate. You do not do small talk. You provide overwhelming value, diagnose skin problems instantly, and pitch the exact solution.

Brand Rules (MUST FOLLOW):
${context.brandPersona ? `- Tone of Voice: ${context.brandPersona.toneOfVoice}\n- Core Ethos: ${context.brandPersona.coreEthos}\n- Unique Selling Propositions: ${JSON.stringify(context.brandPersona.uniqueSellingPropositions)}\n- DO NOT recommend anything containing: ${JSON.stringify(context.brandPersona.blacklistedIngredients)}` : '- No brand persona defined'}

Your Personality & Sales Psychology:
1. EXTREMELY DIRECT & AUTHORITATIVE: Do not ask "how can I help?". Tell them exactly what they need. Use words like "Listen," "Here's the deal," "I'm going to solve this for you right now."
2. ASSUME THE SALE: "I've bundled these for you," "This is the exact system you need," "Add this to your cart and watch your skin transform."
3. OVERWHELMING VALUE: Drop deep, highly technical beauty knowledge (pH levels, ingredient synergies, color theory) to prove you are an absolute expert. Then, transition immediately to the sale.
4. PROACTIVE BUNDLING: Never sell just one product. If they want a foundation, they MUST buy a primer and setting powder. Explain WHY they will fail without the bundle.
5. NO APOLOGIES: You are a $100M/year sales machine. Be extremely confident.

Shopper context:
${context.profile ? `- Skin type: ${context.profile.skinType}, Undertone: ${context.profile.undertone}, Depth: ${context.profile.skinToneDepth}, Concerns: ${context.profile.concerns.join(', ')}` : '- No profile yet'}
${context.faceAnalysis ? `- Face analysis completed` : '- No face analysis yet'}
${context.currentGoal ? `- Current goal: ${context.currentGoal}` : ''}

Available products (You MUST recommend from this exact list): 
${context.catalogueProducts.map(p => \`- \${p.name} (\${p.category}): \${p.currency}\${p.price}. Highlights: \${p.tags.join(', ')}\`).join('\n')}

CRITICAL: Keep responses punchy (2-4 sentences max). Drive them toward the AR Try-On or Routine Builder immediately if they haven't used it. Example: "Listen, your combination skin needs serious hydration prep before you even think about foundation. I'm building you a 3-step routine right now. Let's get it in your cart."`;

    const history = context.messages.slice(-6).map(m => ({
      role: m.role === 'assistant' ? 'model' as const : 'user' as const,
      parts: [{ text: m.content }],
    }));

    const chat = this.model.startChat({
      history: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'Understood. I am Stella, your elite autonomous sales agent. I will aggressively bundle products and drive conversions.' }] },
        ...history,
      ],
    });

    const result = await chat.sendMessageStream(userMessage);
    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) yield text;
    }
  }

  async extractBrandPersona(url: string): Promise<Record<string, unknown>> {
    // In a production system, we would scrape the URL contents.
    // For this implementation, we simulate the scraping and use the LLM to extract the data.
    const prompt = `You are a brand analysis AI. You are analyzing the website: ${url}

Extract the core brand identity to be used by an Autonomous Sales Agent.
Return a JSON object with this exact structure:
{
  "toneOfVoice": "2-3 words describing how the brand speaks (e.g., 'clinical and scientific', 'edgy and bold')",
  "coreEthos": "A 2-sentence summary of what the brand stands for (e.g., '100% vegan, cruelty-free, sustainable packaging.')",
  "blacklistedIngredients": ["parabens", "sulfates", "etc"],
  "uniqueSellingPropositions": ["USP 1", "USP 2"]
}

Return ONLY the JSON.`;

    const result = await this.model.generateContent(prompt);
    const text = result.response.text().trim();
    return JSON.parse(text);
  }

  async extractProductIntelligence(rawProductContext: string): Promise<{
    category: string;
    ingredientsINCIString: string | null;
    isVegan: boolean;
    isCrueltyFree: boolean;
    shades: Array<{ name: string; hexColor: string; undertone: string; skinToneDepth: string[] }>;
    bundleRecommendations: string;
  }> {
    const prompt = `You are an elite cosmetic chemist and brand taxonomist.
Analyze the following raw product data and extract structured intelligence.

Raw Product Data:
${rawProductContext}

Return a JSON object with this exact structure:
{
  "category": "foundation|concealer|blush|bronzer|highlighter|eyeshadow|eyeliner|lipstick|lip_gloss|mascara|brow|primer|setting_spray|skincare",
  "ingredientsINCIString": "comma separated list of key ingredients, or null",
  "isVegan": true/false,
  "isCrueltyFree": true/false,
  "shades": [
    {
      "name": "shade name",
      "hexColor": "#hexcode representing the shade",
      "undertone": "warm|cool|neutral|olive",
      "skinToneDepth": ["fair", "light", "medium", "tan", "deep", "rich"]
    }
  ],
  "bundleRecommendations": "A 1-sentence sales pitch on what category of product to bundle this with (e.g. 'Pairs perfectly with a hydrating primer.')"
}

Return ONLY valid JSON.`;

    const result = await this.model.generateContent(prompt);
    let text = result.response.text().trim();
    if (text.startsWith('\`\`\`json')) {
      text = text.replace(/^\`\`\`json/, '').replace(/\`\`\`$/, '').trim();
    }
    return JSON.parse(text);
  }
}
