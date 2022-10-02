import { NextApiRequest, NextApiResponse } from 'next';
import { findUser } from '../../../../lib/server/user';

type Query = {
  id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id }: Query = _req.query;
    const user = await findUser({ id });
    console.log(user);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
