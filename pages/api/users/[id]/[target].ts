import { NextApiRequest, NextApiResponse } from 'next';
import { updateUser } from '../../../../lib/server/user';

type Query = {
  id?: string;
  target?: string
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id, target }: Query = _req.query;
      const user = await updateUser({ id }, { carbonTarget: Number(target) });
      console.log(user);
      res.status(200).json(user);
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  };
  
  export default handler;
  