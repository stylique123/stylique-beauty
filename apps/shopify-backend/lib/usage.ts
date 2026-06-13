import { prisma } from '@stylique/db';

const TIER_LIMITS = {
  STARTER: { ai_api_calls: 1000 },
  GROWTH: { ai_api_calls: 10000 },
  ULTIMATE: { ai_api_calls: 999999999 },
};

export async function checkAndIncrementUsage(shopId: string, metric: 'ai_api_calls' = 'ai_api_calls'): Promise<{ allowed: boolean; limit: number; current: number }> {
  const currentMonth = new Date().toISOString().slice(0, 7); // e.g., "2026-06"

  const shop = await prisma.shop.findUnique({
    where: { id: shopId },
    include: { plan: true }
  });

  if (!shop) return { allowed: false, limit: 0, current: 0 };

  const tier = shop.plan?.tier || 'STARTER';
  const limit = TIER_LIMITS[tier]?.[metric] || 1000;

  let counter = await prisma.usageCounter.findUnique({
    where: { shopId_metric_period: { shopId, metric, period: currentMonth } }
  });

  if (!counter) {
    counter = await prisma.usageCounter.create({
      data: { shopId, metric, period: currentMonth, count: 0 }
    });
  }

  if (counter.count >= limit) {
    return { allowed: false, limit, current: counter.count };
  }

  // Increment usage
  await prisma.usageCounter.update({
    where: { id: counter.id },
    data: { count: { increment: 1 } }
  });

  return { allowed: true, limit, current: counter.count + 1 };
}
