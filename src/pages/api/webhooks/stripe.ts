import type { NextApiRequest, NextApiResponse } from 'next';
import { verifySignature } from '@/stripe/webhooks/verifySignature';
import { handleCheckoutCompleted } from '@/stripe/webhooks/handleCheckoutCompleted';
import { handleSubscriptionUpdated } from '@/stripe/webhooks/handleSubscriptionUpdated';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const event = verifySignature(req);

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object);
        break;
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send(`Webhook Error: ${(error as Error).message}`);
  }
}
