import type { AIProvider, BeautyProfile, FaceAnalysisResult, Product, ProductRecommendation, Routine, RoutineType, ShadeMatchingResult, BeautyConversationContext } from '@stylique/types';

export interface AIProviderInterface {
  analyzeFace(imageBase64: string, imageMimeType: string): Promise<Omit<FaceAnalysisResult, 'id' | 'shopperId' | 'imageUrl' | 'createdAt'>>;
  matchShades(profile: BeautyProfile, product: Product): Promise<ShadeMatchingResult>;
  recommendProducts(profile: BeautyProfile, products: Product[], context: string): Promise<ProductRecommendation[]>;
  generateRoutine(profile: BeautyProfile, type: RoutineType, products: Product[], occasion?: string): Promise<Omit<Routine, 'id' | 'shopperId' | 'createdAt'>>;
  chatStream(context: BeautyConversationContext, userMessage: string): AsyncGenerator<string>;
  extractBrandPersona(url: string): Promise<Record<string, unknown>>;
  extractProductIntelligence(rawProductContext: string): Promise<{
    category: string;
    ingredientsINCIString: string | null;
    isVegan: boolean;
    isCrueltyFree: boolean;
    shades: Array<{ name: string; hexColor: string; undertone: string; skinToneDepth: string[] }>;
    bundleRecommendations: string;
  }>;
  readonly providerName: AIProvider;
}
