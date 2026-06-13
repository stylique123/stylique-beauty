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
  ProductShade,
} from '@stylique/types';

export class MockAIProvider implements AIProviderInterface {
  readonly providerName: AIProvider = 'mock';

  async analyzeFace(
    imageBase64: string,
    imageMimeType: string
  ): Promise<Omit<FaceAnalysisResult, 'id' | 'shopperId' | 'imageUrl' | 'createdAt'>> {
    // Simulate processing delay
    await new Promise(r => setTimeout(r, 1500));
    return {
      skinToneDepth: 'medium',
      skinToneDepthConfidence: 0.87,
      undertone: 'warm',
      undertoneConfidence: 0.82,
      skinType: 'combination',
      skinTypeConfidence: 0.75,
      faceShape: 'oval',
      faceShapeConfidence: 0.79,
      eyeShape: 'almond',
      concerns: ['dark_spots', 'pores'],
      rawAnalysis:
        'Based on visible features, your skin appears to have a medium tone with warm undertones. The skin type appears to be combination, with some visible pores and minor dark spots in the T-zone area. Face shape appears to be oval, which is versatile for most makeup looks.',
      provider: 'mock',
    };
  }

  async matchShades(profile: BeautyProfile, product: Product): Promise<ShadeMatchingResult> {
    await new Promise(r => setTimeout(r, 500));
    const shades = product.shades;
    if (shades.length === 0) {
      return {
        productId: product.id,
        matches: [],
        bestMatch: null,
        reasoning: 'No shades available for this product.',
      };
    }

    const best = product.shades[0] as ProductShade;
    const alternative = product.shades[1] ?? null;

    return {
      productId: product.id,
      matches: [
        {
          shade: best,
          matchType: 'best',
          confidence: 'high',
          reasoning: `Based on your ${profile.skinToneDepth} skin tone with ${profile.undertone} undertones, ${best.name} appears to be your ideal match.`,
          hexColor: best.hexColor ?? '#C68642',
        },
        ...(alternative
          ? [
              {
                shade: alternative,
                matchType: 'alternative' as const,
                confidence: 'medium' as const,
                reasoning: `${alternative.name} may benefit those who prefer a slightly different coverage or finish.`,
                hexColor: alternative.hexColor ?? '#A0522D',
              },
            ]
          : []),
      ],
      bestMatch: {
        shade: best,
        matchType: 'best',
        confidence: 'high',
        reasoning: `Based on your ${profile.skinToneDepth} skin tone with ${profile.undertone} undertones, ${best.name} appears to be your ideal match.`,
        hexColor: best.hexColor ?? '#C68642',
      },
      reasoning:
        `Your ${profile.skinToneDepth} skin tone with ${profile.undertone} undertones suggests shades in the ` +
        `${profile.undertone === 'warm' ? 'golden/peachy' : profile.undertone === 'cool' ? 'pink/rosy' : 'neutral'} family will complement your complexion.`,
    };
  }

  async recommendProducts(
    profile: BeautyProfile,
    products: Product[],
    context: string
  ): Promise<ProductRecommendation[]> {
    await new Promise(r => setTimeout(r, 800));
    // Simulate prescriptive bundling: Foundation + Primer + Setting Spray
    const foundation = products.find(p => p.category === 'foundation');
    const primer = products.find(p => p.category === 'primer');
    
    const bundle: ProductRecommendation[] = [];
    
    if (foundation) {
      bundle.push({
        product: foundation,
        recommendedShade: foundation.shades[0] ?? null,
        confidence: 'high',
        confidenceScore: 0.98,
        reasoning: `Based on your ${profile.skinType ?? 'skin'} type, this is your exact foundation match.`,
        type: 'best',
        tags: ['foundation', 'base'],
      });
    }
    
    if (primer) {
      bundle.push({
        product: primer,
        recommendedShade: null,
        confidence: 'high',
        confidenceScore: 0.95,
        reasoning: `I've bundled this primer to perfectly prep your ${profile.skinType ?? 'skin'} type before the foundation.`,
        type: 'bundle',
        tags: ['primer', 'prep'],
      });
    }
    
    return bundle;
  }

  async generateRoutine(
    profile: BeautyProfile,
    type: RoutineType,
    products: Product[],
    occasion?: string
  ): Promise<Omit<Routine, 'id' | 'shopperId' | 'createdAt'>> {
    await new Promise(r => setTimeout(r, 1200));
    const isMorning = type === 'morning';
    const steps = [
      {
        id: '1',
        order: 1,
        name: isMorning ? 'Cleanse' : 'Double Cleanse',
        why: 'Removes overnight sebum and prepares skin for products.',
        when: isMorning ? 'After waking up' : 'First step of evening routine',
        how: 'Use circular motions for 60 seconds, rinse with lukewarm water.',
        product: products.find(p => p.category === 'skincare') ?? null,
        productId: null,
        duration: '2 minutes',
        tips: ['Use lukewarm water — hot water strips natural oils'],
      },
      {
        id: '2',
        order: 2,
        name: 'Moisturise / Primer',
        why: profile.skinType === 'dry' ? 'Adds essential hydration.' : 'Creates a smooth base for makeup.',
        when: 'After skin is dry',
        how: 'Apply with fingertips using gentle pressing motions.',
        product: products.find(p => p.category === 'primer') ?? null,
        productId: null,
        duration: '2 minutes',
        tips: ['Let primer set for 1-2 minutes before applying foundation'],
      },
      {
        id: '3',
        order: 3,
        name: 'Foundation',
        why: 'Evens skin tone and provides coverage.',
        when: 'After primer has set',
        how: 'Blend from centre outward using a damp beauty sponge or brush.',
        product: products.find(p => p.category === 'foundation') ?? null,
        productId: null,
        duration: '5 minutes',
        tips: ['Build coverage gradually — easier to add than to remove'],
      },
    ];

    return {
      type,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Beauty Routine`,
      description: `A personalised ${type} routine curated for your ${profile.skinType ?? 'skin'} type with ${profile.undertone ?? 'neutral'} undertones.`,
      steps,
      totalProducts: steps.filter(s => s.product !== null).length,
      estimatedTime: '15 minutes',
      occasion: occasion ?? null,
    };
  }

  async *chatStream(
    context: BeautyConversationContext,
    userMessage: string
  ): AsyncGenerator<string> {
    const responses = {
      default:
        "Hello! I'm your personal beauty advisor. I'm here to help you discover products that are perfectly matched to your unique beauty profile. Would you like to start with a quick skin analysis, or do you have a specific product in mind?",
      foundation:
        "Let's find your perfect foundation! Based on your profile, I'll look for shades with warm undertones that provide medium coverage with a natural finish. Would you like to upload a selfie so I can give you even more precise shade recommendations?",
      routine:
        "I'd love to build you a personalised routine! To create the most effective routine for you, could you tell me: is this for morning, evening, or a special occasion?",
    };

    const lower = userMessage.toLowerCase();
    const response =
      lower.includes('foundation') || lower.includes('shade')
        ? responses.foundation
        : lower.includes('routine')
        ? responses.routine
        : responses.default;

    // Stream word by word to simulate AI streaming
    const words = response.split(' ');
    for (const word of words) {
      yield word + ' ';
      await new Promise(r => setTimeout(r, 40));
    }
  }

  async extractBrandPersona(url: string): Promise<Record<string, unknown>> {
    await new Promise(r => setTimeout(r, 500));
    return {
      toneOfVoice: "warm, clinical, expert",
      coreEthos: "Science-backed formulas with clean ingredients. Always vegan.",
      blacklistedIngredients: ["parabens", "sulfates", "phthalates"],
      uniqueSellingPropositions: ["Dermatologist tested", "100% Vegan", "Customizable routines"]
    };
  }

  async extractProductIntelligence(rawProductContext: string): Promise<{
    category: string;
    ingredientsINCIString: string | null;
    isVegan: boolean;
    isCrueltyFree: boolean;
    shades: Array<{ name: string; hexColor: string; undertone: string; skinToneDepth: string[] }>;
    bundleRecommendations: string;
  }> {
    await new Promise(r => setTimeout(r, 500));
    return {
      category: "foundation",
      ingredientsINCIString: "Water, Dimethicone, Glycerin",
      isVegan: true,
      isCrueltyFree: true,
      shades: [
        {
          name: "Mock Shade 1",
          hexColor: "#f5d0b5",
          undertone: "warm",
          skinToneDepth: ["light", "medium"]
        }
      ],
      bundleRecommendations: "Pairs perfectly with a setting spray."
    };
  }
}
