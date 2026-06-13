import { ProductCatalogueEngine } from "../engines";
import type { Product } from "@stylique/types";

export class RecommendationGuardrails {
  /**
   * Validates if the recommended product exists in the catalog.
   */
  static validateProductExists(productId: string): boolean {
    const product = ProductCatalogueEngine.getProductById(productId);
    return !!product;
  }

  /**
   * Ensures the AI doesn't recommend an SPF if the brand doesn't sell one.
   */
  static validateCategoryExists(category: string): boolean {
    const allProducts = ProductCatalogueEngine.getProducts();
    return allProducts.some(p => p.category === category);
  }

  /**
   * Cleanses AI response text to remove any medical claims.
   * This is a simple mock rule engine check.
   */
  static validateAdvisorOutput(text: string): string {
    let sanitized = text;
    const medicalTerms = ["diagnose", "cure", "treat", "prescribe", "rosacea", "eczema"];
    
    for (const term of medicalTerms) {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      if (regex.test(sanitized)) {
        sanitized = "I cannot provide medical advice, but I can recommend gentle products for sensitive skin.";
        break; // Stop and replace whole text for safety
      }
    }
    
    return sanitized;
  }
}
