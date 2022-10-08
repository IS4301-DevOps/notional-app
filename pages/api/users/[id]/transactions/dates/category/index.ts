import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../../../../../lib/prisma';

type Query = {
  id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id }: Query = _req.query;
    const { startDate, endDate } = _req.body;
    const data = await prisma.transaction.groupBy({
      by: ['userId', 'category'],
      _sum: {
        carbon: true,
        cashback: true,
      },
      where: {
        timeStamp: {
          lte: endDate,
          gte: startDate,
        },
      },
    });
    console.log(data)
    const transactions = data?.filter(row => row.userId === id);
    if (!transactions.length) {
      res.status(204).json({ message: 'No transactions' });
    }
    res.status(200).json(transactions);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
