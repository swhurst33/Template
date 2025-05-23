import type { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from '@/services/authServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email, password } = req.body;

  try {
    const user = await signIn(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
}