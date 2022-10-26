import { NextApiRequest, NextApiResponse } from 'next';
import { getPostById } from '../../../lib/server/post';

type Query = {
    id?: string;
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id }: Query = _req.query;
        const post = await getPostById({ id });
        res.status(200).json(post);
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;