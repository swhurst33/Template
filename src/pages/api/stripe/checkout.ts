import type { NextApiRequest, NextApiResponse } from 'next';
import { createCheckoutSession } from '@/stripe/utils/createCheckoutSession';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email, priceId } = req.body;

  try {
    const session = await createCheckoutSession(email, priceId);
    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}