// ============================================
// ENUMS
// ============================================

export type SkinType = 'oily' | 'dry' | 'combination' | 'normal' | 'sensitive';
export type Undertone = 'warm' | 'cool' | 'neutral' | 'olive';
export type SkinToneDepth = 'fair' | 'light' | 'medium' | 'tan' | 'deep' | 'rich';
export type CoveragePreference = 'sheer' | 'light' | 'medium' | 'full';
export type FinishPreference = 'matte' | 'satin' | 'dewy' | 'natural' | 'luminous';
export type MakeupStyle = 'natural' | 'classic' | 'glam' | 'bold' | 'minimal';
export type FaceShape = 'oval' | 'round' | 'square' | 'heart' | 'diamond' | 'oblong';
export type EyeShape = 'almond' | 'round' | 'hooded' | 'monolid' | 'upturned' | 'downturned';
export type ProductCategory = 'foundation' | 'concealer' | 'blush' | 'bronzer' | 'highlighter' | 'eyeshadow' | 'eyeliner' | 'lipstick' | 'lip_gloss' | 'mascara' | 'brow' | 'primer' | 'setting_spray' | 'skincare';
export type RoutineType = 'morning' | 'evening' | 'event' | 'natural' | 'glam';
export type RecommendationConfidence = 'high' | 'medium' | 'low';
export type ShadeMatchType = 'best' | 'alternative' | 'lighter' | 'darker';
export type AIProvider = 'gemini' | 'openai' | 'anthropic' | 'mock';

// ============================================
// SKIN CONCERN
// ============================================

export type SkinConcern =
  | 'acne'
  | 'dark_spots'
  | 'hyperpigmentation'
  | 'redness'
  | 'dryness'
  | 'oiliness'
  | 'fine_lines'
  | 'pores'
  | 'uneven_texture'
  | 'dark_circles'
  | 'dullness'
  | 'sensitivity';

// ============================================
// BEAUTY PROFILE
// ============================================

export interface BeautyProfile {
  id: string;
  shopperId: string;
  brandId: string;
  skinType: SkinType | null;
  undertone: Undertone | null;
  skinToneDepth: SkinToneDepth | null;
  concerns: SkinConcern[];
  faceShape: FaceShape | null;
  eyeShape: EyeShape | null;
  coveragePreference: CoveragePreference | null;
  finishPreference: FinishPreference | null;
  makeupStyle: MakeupStyle | null;
  budget: 'budget' | 'mid' | 'premium' | 'luxury' | null;
  fragranceFree: boolean;
  veganOnly: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BeautyProfileInput extends Partial<Omit<BeautyProfile, 'id' | 'shopperId' | 'brandId' | 'createdAt' | 'updatedAt'>> {}

// ============================================
// FACE ANALYSIS
// ============================================

export interface FaceAnalysisResult {
  id: string;
  shopperId: string;
  imageUrl: string;
  skinToneDepth: SkinToneDepth;
  skinToneDepthConfidence: number;
  undertone: Undertone;
  undertoneConfidence: number;
  skinType: SkinType;
  skinTypeConfidence: number;
  faceShape: FaceShape | null;
  faceShapeConfidence: number | null;
  eyeShape: EyeShape | null;
  concerns: SkinConcern[];
  rawAnalysis: string;
  provider: AIProvider;
  createdAt: Date;
}

// ============================================
// PRODUCT
// ============================================

export interface ProductShade {
  id: string;
  productId: string;
  name: string;
  hexColor: string | null;
  undertone: Undertone | null;
  skinToneDepth: SkinToneDepth[];
  imageUrl: string | null;
  inStock: boolean;
  price: number | null;
}

export interface Product {
  id: string;
  brandId: string;
  externalId: string | null; // Shopify product ID
  name: string;
  description: string;
  category: ProductCategory;
  brand: string;
  price: number;
  currency: string;
  imageUrl: string | null;
  images: string[];
  tags: string[];
  shades: ProductShade[];
  inStock: boolean;
  url: string | null;
  ingredients: string | null;
  spf: number | null;
  isVegan: boolean;
  isCrueltyFree: boolean;
  lifespanDays: number | null;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// SHADE MATCH
// ============================================

export interface ShadeMatch {
  shade: ProductShade;
  matchType: ShadeMatchType;
  confidence: RecommendationConfidence;
  reasoning: string;
  hexColor: string;
}

export interface ShadeMatchingResult {
  productId: string;
  matches: ShadeMatch[];
  bestMatch: ShadeMatch | null;
  reasoning: string;
}

// ============================================
// RECOMMENDATION
// ============================================

export interface ProductRecommendation {
  product: Product;
  recommendedShade: ProductShade | null;
  confidence: RecommendationConfidence;
  confidenceScore: number;
  reasoning: string;
  type: 'best' | 'alternative' | 'premium' | 'budget' | 'bundle';
  tags: string[];
}

export interface RecommendationSet {
  sessionId: string;
  recommendations: ProductRecommendation[];
  routineContext: RoutineType | null;
  generatedAt: Date;
}

// ============================================
// ROUTINE
// ============================================

export interface RoutineStep {
  id: string;
  order: number;
  name: string;
  why: string;
  when: string;
  how: string;
  product: Product | null;
  productId: string | null;
  duration: string;
  tips: string[];
}

export interface Routine {
  id: string;
  shopperId: string;
  type: RoutineType;
  name: string;
  description: string;
  steps: RoutineStep[];
  totalProducts: number;
  estimatedTime: string;
  occasion: string | null;
  createdAt: Date;
}

// ============================================
// CHAT / AI
// ============================================

export type ChatRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: Date;
  metadata?: {
    products?: Product[];
    shadeMatches?: ShadeMatchingResult[];
    routine?: Routine;
    analysis?: FaceAnalysisResult;
  };
}

export interface BeautyConversationContext {
  sessionId: string;
  brandId: string;
  shopperId: string | null;
  profile: BeautyProfile | null;
  faceAnalysis: FaceAnalysisResult | null;
  messages: ChatMessage[];
  currentGoal: ShopperGoal | null;
  catalogueProducts: Product[];
  brandPersona?: Record<string, unknown> | null;
}

// ============================================
// SHOPPER GOALS
// ============================================

export type ShopperGoal =
  | 'find_foundation'
  | 'find_lipstick'
  | 'complete_routine'
  | 'skincare_routine'
  | 'event_look'
  | 'everyday_makeup'
  | 'try_on'
  | 'skin_analysis'
  | 'product_comparison'
  | 'gift';

export interface ShopperGoalOption {
  id: ShopperGoal;
  label: string;
  description: string;
  icon: string;
}

// ============================================
// SESSION
// ============================================

export interface ShoppingSession {
  id: string;
  brandId: string;
  shopperId: string | null;
  profile: BeautyProfile | null;
  faceAnalysis: FaceAnalysisResult | null;
  messages: ChatMessage[];
  goal: ShopperGoal | null;
  cartItems: CartItem[];
  tryOnHistory: TryOnSession[];
  emailCaptured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  product: Product;
  shade: ProductShade | null;
  quantity: number;
  addedAt: Date;
}

export interface TryOnSession {
  id: string;
  productId: string;
  shadeId: string;
  imageUrl: string;
  originalImageUrl: string;
  savedAt: Date;
  liked: boolean;
}

// ============================================
// BRAND
// ============================================

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  primaryColor: string | null;
  accentColor: string | null;
  shopifyDomain: string | null;
  shopifyAccessToken: string | null;
  plan: 'starter' | 'growth' | 'enterprise';
  widgetConfig: WidgetConfig;
  createdAt: Date;
}

export interface WidgetConfig {
  primaryColor: string;
  accentColor: string;
  position: 'bottom-right' | 'bottom-left';
  greeting: string;
  showTryOn: boolean;
  showRoutineBuilder: boolean;
  showShadeMatching: boolean;
}

// ============================================
// ANALYTICS
// ============================================

export type AnalyticsEventType =
  | 'session_started'
  | 'face_analysis_completed'
  | 'shade_matched'
  | 'try_on_viewed'
  | 'routine_generated'
  | 'recommendation_clicked'
  | 'cart_add'
  | 'email_captured'
  | 'purchase_completed';

export interface AnalyticsEvent {
  type: AnalyticsEventType;
  sessionId: string;
  brandId: string;
  shopperId: string | null;
  data: Record<string, unknown>;
  timestamp: Date;
}

export interface InteractionEvent {
  id: string;
  shopId: string;
  shopperId: string;
  type: 'hover' | 'chat' | 'rejection' | 'preference_state' | string;
  targetId: string | null;
  payloadJson: Record<string, unknown> | null;
  createdAt: Date;
}
