import { MockAIProvider } from './providers/mock';
import { GeminiAIProvider } from './providers/gemini';
import { agm, AdaptiveGuidanceManager, type MiraStage, type ShopperContext } from './agm';

export type { AIProviderInterface } from './provider';
export { MockAIProvider } from './providers/mock';
export { GeminiAIProvider } from './providers/gemini';
export type { AIProvider } from '@stylique/types';
export { agm, AdaptiveGuidanceManager };
export type { MiraStage, ShopperContext };

/**
 * Factory: returns the appropriate AI provider based on environment.
 * Set AI_PROVIDER=gemini and GEMINI_API_KEY to use Gemini.
 * Falls back to mock provider for development.
 */
export function createAIProvider(): MockAIProvider | GeminiAIProvider {
  const provider = process.env.AI_PROVIDER ?? 'mock';
  const geminiKey = process.env.GEMINI_API_KEY;

  if (provider === 'gemini' && geminiKey) {
    return new GeminiAIProvider(geminiKey);
  }

  console.log('[Stylique AI] Using mock provider. Set AI_PROVIDER=gemini + GEMINI_API_KEY to use Gemini.');
  return new MockAIProvider();
}
