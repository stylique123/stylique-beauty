import { NextResponse } from 'next/server';
import { prisma } from '@stylique/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { frictionType, shopDomain, sessionId } = body;

    if (!frictionType || !shopDomain || !sessionId) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Lookup the shop and shopper session
    const shop = await prisma.shop.findUnique({ where: { shopifyDomain: shopDomain } });
    const session = await prisma.shopperSession.findUnique({ where: { sessionId: sessionId } });

    if (!shop) {
      return new NextResponse('Shop not found', { status: 404 });
    }

    // Create the HesitationEvent
    await prisma.hesitationEvent.create({
      data: {
        shopId: shop.id,
        shopperId: session ? session.id : null,
        hesitationType: frictionType,
        context: JSON.stringify({ source: 'FrictionTrackerProvider' }),
        resolved: false,
      }
    });

    return new NextResponse('Friction event logged', { status: 200 });
  } catch (error) {
    console.error('Failed to log friction event:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
