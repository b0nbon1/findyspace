import type { NextApiRequest, NextApiResponse } from 'next';

import firestore from '../../src/utils/firestore';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    try {
      const { email } = req?.body;
      const collection = firestore.collection('waitlist');
      const snapshot = await collection.where('email', '==', email).get();
      if (snapshot.empty) {
        collection.add({
          created_at: new Date(),
          email,
        });
        return res.status(200).json({ message: 'Successfully added user' });
      }

      return res.status(409).json({ message: 'User already exists' });
    } catch (error) {
      return res.status(500).json({ message: 'An error occured' });
    }
  } else {
    return res.status(500).json({ message: 'Invalid method' });
  }
}
