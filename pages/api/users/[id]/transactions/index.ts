import { NextApiRequest, NextApiResponse } from 'next';
import { findUserWithTransactions } from '../../../../../lib/server/user';

type Query = {
  id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id }: Query = _req.query;
    const { transactions } = await findUserWithTransactions(
      { id },
      {
        transactions: {
          orderBy: {
            timeStamp: 'desc',
          },
        },
      },
    );
    console.log(transactions);
    res.status(200).json(transactions);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
