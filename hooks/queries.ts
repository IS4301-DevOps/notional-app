import { Post, Tip, Transaction, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BreakdownByUser } from '../interfaces';
import {
  fetchUser,
  fetchUserTransactions,
  fetchUserTransactionsByCategory,
  fetchUserTransactionsByDate,
  getAllPosts,
  getTodayTip,
} from '../lib/clientApi';

export const useUserQuery = (userId: string) => {
  return useQuery<User, AxiosError>(['user', userId], () => fetchUser(userId), {
    enabled: !!userId,
  });
};

export const useTransactionsDateQuery = (userId: string, startDate: Date, endDate: Date) => {
  return useQuery<Transaction[], AxiosError>(['transactions', userId], () => fetchUserTransactionsByDate(userId, startDate, endDate), {
    enabled: !!userId && !!startDate && !!endDate,
  });
};

export const useTransactionsQuery = (userId: string) => {
  return useQuery<Transaction[], AxiosError>(['transactions', userId], () => fetchUserTransactions(userId), {
    enabled: !!userId,
  });
};

export const useTransactionsCategoryQuery = (userId: string, startDate: Date, endDate: Date) => {
  return useQuery<BreakdownByUser[], AxiosError>(['breakdown', userId], () => fetchUserTransactionsByCategory(userId, startDate, endDate), {
    enabled: !!userId && !!startDate && !!endDate,
  });
};

export const usePostsQuery = () => {
  return useQuery<Post[], AxiosError>(['posts'], getAllPosts);
};

export const useTipQuery = () => {
  return useQuery<Tip, AxiosError>(['tip'], getTodayTip);
};
