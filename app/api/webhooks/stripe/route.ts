import Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const body = await req.text();

  // ✅ Await the headers() function
  const hdrs = await headers();
  const signature = hdrs.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try{
    event =stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch(error:any) {
    return new NextResponse(`Webhook error:${error.message}`,{
        status:400,
    });
  }

  const session=event.data.object as Stripe.Checkout.Session;

  if(event.type==="checkout.session.completed"){
    const subscription=await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    if(!session?.metadata?.userId){
      return new NextResponse("User ID is required",{status:400});
    }

    await db.insert(userSubscription).values({
  userId: session.metadata.userId,
  stripeCustomerId: subscription.customer as string,
  stripeSubscriptionId: subscription.id,
  stripePriceId: subscription.items.data[0].price.id,
  stripeCurrentPeriodEnd:new Date()
   // ✅ convert to Date
});

  }

  if(event.type==="invoice.payment_succeeded"){
    const subscription=await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    await db.update(userSubscription).set({
      stripePriceId:subscription.items.data[0].price.id,

    }).where(eq(userSubscription.stripeSubscriptionId,subscription.id))
  }

  return new NextResponse(null,{status:200});
}