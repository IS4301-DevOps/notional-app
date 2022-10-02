import { NextApiRequest, NextApiResponse } from 'next';
import { findUser } from '../../../../lib/server/user';

type Query = {
  id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id }: Query = _req.query;
    const transactions = await findUser({ id }, { transactions: true });
    console.log(transactions);
    res.status(200).json(transactions);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
