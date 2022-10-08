import { Prisma, Transaction } from '@prisma/client';
import prisma from '../prisma';

export const groupTransactionsBySum = async (
  by: Array<Prisma.TransactionScalarFieldEnum>,
  _sum?: Prisma.TransactionSumAggregateInputType,
  orderBy?: Prisma.TransactionSumOrderByAggregateInput,
) => {
  return await prisma.transaction.groupBy({
    by,
    _sum,
    orderBy,
  });
};
