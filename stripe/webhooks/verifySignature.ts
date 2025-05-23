import Stripe from 'stripe';
import { NextApiRequest } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export function verifySignature(req: NextApiRequest) {
  const sig = req.headers['stripe-signature'] as string;
  const rawBody = (req as any).rawBody;
  return stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
}