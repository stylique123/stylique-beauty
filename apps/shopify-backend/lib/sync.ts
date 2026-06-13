import { shopify } from '@/lib/shopify';
import { prisma } from '@stylique/db';

export async function syncShopifyCatalog(shopId: string, shopDomain: string) {
  try {
    // 1. Get the offline session for the shop
    const session = await prisma.session.findFirst({
      where: { shop: shopDomain },
    });

    if (!session) {
      throw new Error(`No offline session found for shop \${shopDomain}`);
    }

    // 2. Instantiate a Shopify REST client
    const client = new shopify.clients.Rest({
      session: session as any,
    });

    // 3. Fetch products from Shopify
    // In production, we'd paginate. Here we fetch the first 250.
    const response = await client.get({
      path: 'products',
      query: { limit: 250 },
    });

    const products = (response.body as any).products;

    if (!products || !Array.isArray(products)) {
      return 0;
    }

    let syncedCount = 0;

    // 4. Upsert into DB
    for (const product of products) {
      const existingProduct = await prisma.product.findUnique({
        where: { shopId_shopifyId: { shopId, shopifyId: product.id.toString() } },
      });

      const dbProduct = await prisma.product.upsert({
        where: { shopId_shopifyId: { shopId, shopifyId: product.id.toString() } },
        create: {
          shopId,
          shopifyId: product.id.toString(),
          handle: product.handle,
          title: product.title,
          productType: product.product_type,
          vendor: product.vendor,
          tags: product.tags ? product.tags.split(', ') : [],
        },
        update: {
          handle: product.handle,
          title: product.title,
          productType: product.product_type,
          vendor: product.vendor,
          tags: product.tags ? product.tags.split(', ') : [],
        },
      });

      // Process variants (shades/sizes)
      if (product.variants && Array.isArray(product.variants)) {
        for (const variant of product.variants) {
          await prisma.productVariant.upsert({
            where: { productId_shopifyId: { productId: dbProduct.id, shopifyId: variant.id.toString() } },
            create: {
              productId: dbProduct.id,
              shopifyId: variant.id.toString(),
              sku: variant.sku,
              color: variant.option1, // Assuming option1 is color/shade, customizable via settings
              priceCents: Math.round(parseFloat(variant.price) * 100),
              inventoryQuantity: variant.inventory_quantity,
            },
            update: {
              sku: variant.sku,
              color: variant.option1,
              priceCents: Math.round(parseFloat(variant.price) * 100),
              inventoryQuantity: variant.inventory_quantity,
            },
          });
        }
      }

      // Process images
      if (product.images && Array.isArray(product.images)) {
        for (const image of product.images) {
          const existingImage = await prisma.productImage.findFirst({
            where: { productId: dbProduct.id, url: image.src }
          });
          if (!existingImage) {
            await prisma.productImage.create({
              data: {
                productId: dbProduct.id,
                shopifyId: image.id.toString(),
                url: image.src,
                position: image.position,
              }
            });
          }
        }
      }

      syncedCount++;
    }

    return syncedCount;
  } catch (error) {
    console.error('Error syncing catalog for shop', shopDomain, error);
    throw error;
  }
}
