import { Post, Prisma } from '@prisma/client';
import prisma from '../prisma';

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const getPostById = async (where: Partial<Prisma.PostWhereInput>, select?: Prisma.PostSelect) => {
  return (await prisma.post.findFirst({
    where,
    select,
  })) as Post;
};