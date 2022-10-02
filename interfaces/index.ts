import { Transaction } from "@prisma/client";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  carbonTarget: number;
  imageUrl?: string;
  transactions?: Transaction[];
};

export type Post = {
  id: string;
  title: string;
  image: string;
  category: string;
  content?: string;
  publishedAt?: Date;
  published: boolean;
  author?: User;
};
