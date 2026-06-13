import type { BeautyProfile, Product, ProductShade, ShadeMatchingResult, RoutineType, RecommendationConfidence } from "@stylique/types";
import { DEMO_PRODUCTS } from "../demo-catalogue";
import { rankShades } from "../shade-utils";

// 1. Beauty Profile Engine
export const BeautyProfileEngine = {
  createDefault: (shopperId: string): BeautyProfile => ({
    id: `prof-${Date.now()}`,
    shopperId,
    brandId: "stylique-demo",
    skinType: null,
    undertone: null,
    skinToneDepth: null,
    concerns: [],
    faceShape: null,
    eyeShape: null,
    coveragePreference: null,
    finishPreference: null,
    makeupStyle: null,
    budget: null,
    fragranceFree: false,
    veganOnly: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  updateProfile: (current: BeautyProfile, updates: Partial<BeautyProfile>): BeautyProfile => ({
    ...current,
    ...updates,
    updatedAt: new Date(),
  }),
};

// 2. Product Catalogue Engine
export const ProductCatalogueEngine = {
  getProducts: (): Product[] => DEMO_PRODUCTS,
  getProductById: (id: string): Product | undefined => DEMO_PRODUCTS.find(p => p.id === id),
  getProductsByCategory: (cat: string): Product[] => DEMO_PRODUCTS.filter(p => p.category === cat),
};

// 3. Shade Engine
export const ShadeEngine = {
  matchShade: (product: Product, profile: BeautyProfile): ShadeMatchingResult | null => {
    if (!profile.skinToneDepth || !profile.undertone) return null;
    const ranked = rankShades(product.shades, profile.skinToneDepth, profile.undertone);
    const best = ranked[0];
    if (!best) return null;

    return {
      productId: product.id,
      matches: ranked.slice(0, 4).map((s, i) => ({
        shade: s,
        matchType: i === 0 ? "best" : i === 1 ? "alternative" : i === 2 ? "lighter" : "darker",
        confidence: i === 0 ? "high" : i === 1 ? "medium" : "low",
        reasoning: i === 0 
          ? `This ${s.name} shade works perfectly for your ${profile.undertone} undertones.`
          : `For a slightly different look, try ${s.name}.`,
        hexColor: s.hexColor ?? "#C68642",
      })),
      bestMatch: {
        shade: best,
        matchType: "best",
        confidence: "high",
        reasoning: `This ${best.name} shade works perfectly for your ${profile.undertone} undertones.`,
        hexColor: best.hexColor ?? "#C68642",
      },
      reasoning: "Matched based on skin depth and undertone analysis."
    };
  }
};

// 4. Recommendation Engine
export const RecommendationEngine = {
  buildRoutine: (profile: BeautyProfile, goal: RoutineType | 'custom'): any => {
    // In a real system, this queries the ProductCatalogue based on the goal and profile.
    const catalogue = ProductCatalogueEngine.getProducts();
    const findProduct = (cat: string) => catalogue.find(p => p.category === cat);

    const steps = [];
    let order = 1;

    // Primer
    const primer = findProduct('primer');
    if (primer) steps.push({ order: order++, name: "Prep Base", product: primer, why: "To smooth pores and lock in makeup.", action: "Try On" });

    // Foundation
    const foundation = findProduct('foundation');
    if (foundation) steps.push({ order: order++, name: "Even Complexion", product: foundation, why: "For a flawless base that matches your skin tone.", action: "Try On" });

    // Concealer
    const concealer = findProduct('concealer');
    if (concealer) steps.push({ order: order++, name: "Brighten Eyes", product: concealer, why: "To conceal dark circles and add brightness.", action: "Try On" });

    // Blush
    const blush = findProduct('blush');
    if (blush) steps.push({ order: order++, name: "Add Warmth", product: blush, why: "A soft flush of color for life and dimension.", action: "Try On" });

    // Eyeshadow
    const eyes = findProduct('eyeshadow');
    if (eyes) steps.push({ order: order++, name: "Define Eyes", product: eyes, why: "To complete the soft glam look.", action: "Try On" });

    // Lip
    const lip = findProduct('lipstick');
    if (lip) steps.push({ order: order++, name: "Finish Look", product: lip, why: "A complimentary shade for your undertone.", action: "Try On" });

    return {
      name: "Your Stylique Custom Routine",
      description: "A complete look designed mathematically for your skin profile.",
      steps
    };
  }
};

// 5. Learning Engine
export const LearningEngine = {
  logPreference: (profileId: string, action: 'save_shade' | 'skip_shade' | 'try_on', shadeId: string) => {
    console.log(`[LearningEngine] Profile ${profileId} logged ${action} for shade ${shadeId}`);
  }
};

// 6. Analytics Engine
export const AnalyticsEngine = {
  logEvent: (brandId: string, event: string, data: any) => {
    console.log(`[AnalyticsEngine] Brand ${brandId} event: ${event}`, data);
  },
  getMetrics: () => ({
    assistedRevenue: "$42,050",
    conversionUplift: "+32%",
    aovUplift: "+$18",
    tryOnToCartRate: "18.5%",
    routineToCartRate: "24.1%",
    advisorToPurchaseRate: "12.2%"
  })
};

// 7. Cart Engine
export const CartEngine = {
  addSingleProduct: (productId: string, shadeId?: string) => {
    console.log(`[CartEngine] Added product ${productId} (shade: ${shadeId}) to cart`);
    return true;
  },
  addRoutine: (routineItems: Array<{productId: string, shadeId?: string}>) => {
    console.log(`[CartEngine] Added full routine (${routineItems.length} items) to cart`);
    return true;
  }
};

// 8. Email Engine
export const EmailEngine = {
  sendRoutine: (email: string, routineData: any) => {
    console.log(`[EmailEngine] Sent routine to ${email}`);
    return true;
  }
};
