import { Transaction, TransactionCategory } from "@prisma/client";

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

type Breakdown = {
  _sum: { carbon: string; cashback: string };
  category: TransactionCategory;
};

export type BreakdownByUser = Breakdown & { userId: string };

export type Tab = {
  name: string;
  href: string;
  current: boolean;
};