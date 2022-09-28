import { NextApiRequest, NextApiResponse } from 'next';
import { getTodayTip } from '../../../lib/server/tip';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    var tip = await getTodayTip();
    console.log(tip);
    if (tip === null) {
      tip = {
        id: "1",
        message: "Use less water today",
        date: new Date()
      }
      res.status(200).json(tip);
    } else {
      res.status(200).json(tip);
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;