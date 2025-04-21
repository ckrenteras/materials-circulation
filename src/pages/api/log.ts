import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('materials-circulation');
      const collection = db.collection('logs');
      const result = await collection.insertOne(req.body);
      res.status(201).json({ message: 'Logged successfully', id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database insert failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}