import { NextApiRequest, NextApiResponse } from 'next';
import { groupTransactionsBySum } from '../../../../lib/server/transaction';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await groupTransactionsBySum(['userId', 'category'], {
      carbon: true,
      cashback: true,
    });
    console.log(data);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
