import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const stripe = new Stripe(process.env.STRIPE_API_KEY);
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret,
    );

    if (event.type === "checkout.session.completed") {
      await connectMongo();
      const user = await User.findById(event.data.object.client_reference_id);
      user.hasAccess = true;
      user.customerId = event.data.object.customer;
      await user.save();
    }
  } catch (e) {
    console.error("Stripe error: " + e?.message);
  }

  return NextResponse.json({});
}
