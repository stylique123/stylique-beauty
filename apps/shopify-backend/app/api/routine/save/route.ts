import { NextResponse } from 'next/server';
import { prisma } from '@stylique/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, routine, sessionId, shop } = body;

    if (!email || !routine) {
      return NextResponse.json({ error: 'Missing email or routine data' }, { status: 400 });
    }

    const shopRecord = await prisma.shop.findUnique({
      where: { shopifyDomain: shop }
    });

    if (!shopRecord) {
      return NextResponse.json({ error: 'Shop not found' }, { status: 404 });
    }

    // Upsert the ShopperSession to include the email
    const shopperSession = await prisma.shopperSession.upsert({
      where: { sessionId: sessionId },
      update: { email: email },
      create: {
        sessionId: sessionId,
        shopifyDomain: shop,
        email: email
      }
    });

    // Save the routine
    const savedRoutine = await prisma.savedRoutine.create({
      data: {
        shopId: shopRecord.id,
        shopifyDomain: shop,
        shopperId: shopperSession.id,
        productIds: routine.steps.map((s: any) => s.productId),
        stepOrder: routine.steps,
        routineType: routine.type,
      }
    });

    // Log the event
    await prisma.analyticsEvent.create({
      data: {
        shopId: shopRecord.id,
        shopperId: shopperSession.id,
        name: 'BEAUTY_ROUTINE_BUILT',
        payload: { emailCaptured: true, routineId: savedRoutine.id } as any
      }
    });

    return NextResponse.json({ success: true, routineId: savedRoutine.id });
  } catch (err) {
    console.error('[Save Routine API] Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
