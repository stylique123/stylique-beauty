import { NextResponse } from 'next/server';

// In a real implementation, this would save to the database using Prisma.
// For the MVP, we just accept the payload and return success to unblock the frontend tracking.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Log the analytics event
    console.log('[Analytics API] Received Event:', body.type, body.data);

    // If it's a cart_add, we would update the Merchant's Dashboard metrics (AOV increase, extra revenue)
    if (body.type === 'cart_add') {
      console.log(`[Analytics API] 💰 Stella pushed a sale! Value: $${body.data.value} from ${body.data.source}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Analytics API] Error parsing request:', err);
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}
