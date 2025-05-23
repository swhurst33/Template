// src/lib/stripe.ts

import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY!;

if (!stripeSecretKey) {
  throw new Error('Missing Stripe secret key in environment variables');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16', // Adjust to the latest supported API version
});
