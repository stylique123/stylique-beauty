import { prisma } from '@stylique/db';
import { GeminiAIProvider } from '@stylique/ai';

const geminiProvider = new GeminiAIProvider(process.env.GEMINI_API_KEY || 'dummy_key');

export async function enrichProductWithAI(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { variants: true, images: true },
    });

    if (!product) {
      throw new Error(`Product ${productId} not found for enrichment.`);
    }

    // Build the raw context to feed into Gemini
    const rawContext = `
Title: ${product.title}
Description: ${product.handle} // We don't fetch full body_html in sync yet, assuming handle/title gives enough hint for now
Type: ${product.productType}
Tags: ${product.tags.join(', ')}
Variants:
${product.variants.map(v => `- SKU: ${v.sku}, Color Option: ${v.color}`).join('\n')}
`;

    console.log(`[Enrichment] Requesting Deep AI Extraction for ${product.title}...`);
    const intelligence = await geminiProvider.extractProductIntelligence(rawContext);

    // Save the enriched data back into the DB
    await prisma.product.update({
      where: { id: product.id },
      data: {
        category: intelligence.category,
        ingredientsINCIString: intelligence.ingredientsINCIString,
        isVegan: intelligence.isVegan,
        isCrueltyFree: intelligence.isCrueltyFree,
      },
    });

    // Update variants based on extracted shades
    if (intelligence.shades && intelligence.shades.length > 0) {
      for (const shade of intelligence.shades) {
        // Find variant matching by shade name
        const variant = product.variants.find(v => 
          v.color && v.color.toLowerCase() === shade.name.toLowerCase()
        );

        if (variant) {
          await prisma.productVariant.update({
            where: { id: variant.id },
            data: {
              hexColor: shade.hexColor,
              // we don't have undertone directly on variant right now, but we could add it to a metadata JSON field if needed, or update DB.
              // For now, Stylique assumes shade matching logic works off hex and metadata.
            },
          });
        }
      }
    }

    console.log(`[Enrichment] Success: ${product.title}`);
    return intelligence;
  } catch (error) {
    console.error('[Enrichment] Failed to enrich product:', error);
    throw error;
  }
}
