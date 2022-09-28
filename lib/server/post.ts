import prisma from '../prisma';

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};
