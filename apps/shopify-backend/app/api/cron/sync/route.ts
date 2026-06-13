import { NextResponse } from 'next/server';
import { prisma } from '@stylique/db';
import { syncShopifyCatalog } from '@/lib/sync';
import { enrichProductWithAI } from '@/lib/enrichment';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Maximum time allowed for Next.js API routes on Vercel is usually 10s-60s on hobby/pro.
// For a production system with AI enrichment, we would use a background job queue (e.g. Inngest / Upstash / Trigger.dev).
// Here we process synchronously for the MVP.

export async function GET(request: Request) {
  try {
    const activeShops = await prisma.shop.findMany({
      where: { uninstalledAt: null },
      include: { plan: true },
    });

    const results = [];

    for (const shop of activeShops) {
      console.log(`[Cron Sync] Starting sync for ${shop.shopifyDomain}...`);
      
      try {
        // 1. Fetch raw catalog from Shopify
        const syncedCount = await syncShopifyCatalog(shop.id, shop.shopifyDomain);
        
        // 2. Fetch products that need enrichment (e.g., missing category or ingredients)
        const unenrichedProducts = await prisma.product.findMany({
          where: { 
            shopId: shop.id,
            category: null, // Basic heuristic to find unenriched products
          },
          take: 5 // Process in small batches to avoid timeouts
        });

        const enrichedIds = [];
        for (const product of unenrichedProducts) {
          await enrichProductWithAI(product.id);
          enrichedIds.push(product.id);
        }

        results.push({
          shop: shop.shopifyDomain,
          syncedProductsCount: syncedCount,
          enrichedProductsCount: enrichedIds.length
        });
      } catch (shopError) {
        console.error(`[Cron Sync] Failed for shop ${shop.shopifyDomain}`, shopError);
        results.push({
          shop: shop.shopifyDomain,
          error: shopError instanceof Error ? shopError.message : 'Unknown error'
        });
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error('[Cron Sync] Global error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
