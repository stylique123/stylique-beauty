import { NextResponse } from 'next/server';
import { prisma } from '@stylique/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // Basic auth check for cron
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET || 'dev_cron_secret'}`) {
      // In dev we might allow it without auth, but let's be safe
      console.warn('[Cron] Missing or invalid CRON_SECRET');
    }

    console.log('[Cron] Starting Autonomous Restock Pipeline...');

    // 1. Find routines that have an email attached and are active
    const routines = await prisma.savedRoutine.findMany({
      where: { status: 'active' },
      include: {
        shopper: true,
        shop: true
      }
    });

    let emailsSent = 0;

    for (const routine of routines) {
      if (!routine.shopper?.email) continue; // Skip if no email

      // To do this accurately, we should check when each product in the routine was purchased.
      // For MVP, we use the routine createdAt and the product's lifespan.
      const daysSinceCreation = Math.floor((new Date().getTime() - routine.createdAt.getTime()) / (1000 * 3600 * 24));

      // Mock Product Lifespans (Since our DB seed might not have them populated yet)
      const MOCK_LIFESPANS: Record<string, number> = {
        'foundation': 60,
        'primer': 45,
        'powder': 90
      };

      const stepOrder = routine.stepOrder as any[];
      const expiringProducts = [];

      for (const step of stepOrder) {
        const cat = step.product?.category;
        const lifespan = MOCK_LIFESPANS[cat] || 60; // Default 60 days
        
        // If we are within 7 days of it running out, and we haven't checked recently
        if (daysSinceCreation >= (lifespan - 7)) {
          expiringProducts.push(step.product);
        }
      }

      if (expiringProducts.length > 0) {
        // Did we already send a reminder recently?
        const daysSinceLastCheck = routine.lastReplenishmentCheckAt 
          ? Math.floor((new Date().getTime() - routine.lastReplenishmentCheckAt.getTime()) / (1000 * 3600 * 24))
          : Infinity;

        if (daysSinceLastCheck > 30) { // Don't spam them more than once a month for the same routine
          // MOCK EMAIL PROVIDER
          console.log(`\n📧 [EMAIL DISPATCH] To: ${routine.shopper.email}`);
          console.log(`Subject: Time to restock your Stylique Beauty Routine!`);
          console.log(`Body: You might be running low on ${expiringProducts.map(p => p.name).join(', ')}. Click here to one-tap restock.\n`);

          // Update the DB
          await prisma.savedRoutine.update({
            where: { id: routine.id },
            data: { lastReplenishmentCheckAt: new Date() }
          });

          // Log the Intelligence Event so the Merchant sees the pipeline working
          await prisma.analyticsEvent.create({
            data: {
              shopId: routine.shopId,
              shopperId: routine.shopperId,
              name: 'BEAUTY_REPLENISHMENT_TRIGGERED',
              payload: { products: expiringProducts.map(p => p.id), email: routine.shopper.email } as any
            }
          });

          emailsSent++;
        }
      }
    }

    console.log(`[Cron] Pipeline complete. Triggered ${emailsSent} restock emails.`);

    return NextResponse.json({ success: true, emailsSent });
  } catch (err) {
    console.error('[Cron] Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
