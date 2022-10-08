import { NextApiRequest, NextApiResponse } from 'next';
import { findUser, findUserWithTransactions } from '../../../../../../lib/server/user';

type Query = {
  id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id }: Query = _req.query;
    const { startDate, endDate } = _req.body;
    const { transactions } = await findUserWithTransactions(
      { id },
      {
        transactions: {
          where: {
            timeStamp: {
              lte: endDate,
              gte: startDate,
            },
          },
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
