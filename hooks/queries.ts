import { Transaction, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { fetchUser, fetchUserTransactions, fetchUserTransactionsByDate } from '../lib/clientApi';

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
