import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '../../../lib/server/post';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
