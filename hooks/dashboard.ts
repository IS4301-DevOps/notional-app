import { User } from '@prisma/client';
import dayjs from 'dayjs';
import _ from 'lodash';
import { CategoryColors } from '../interfaces/enums';
import { useTransactionsCategoryQuery } from './queries';

export const useCarbonBreakdown = (user: User) => {
  const curDate = dayjs();
  /* This is temporary!! Need to change before presentation as the data in db is current to the presentation date */
  const startDate = curDate.toDate(); 
  const endDate = curDate.add(1, 'month').toDate();
  
  const catQuery = useTransactionsCategoryQuery(user?.id, startDate, endDate);

  const breakdownByUser = catQuery.data;
  const totalCarbon = _.sumBy(breakdownByUser, item => Number(item._sum.carbon));
  const totalCashback = _.sumBy(breakdownByUser, item => Number(item._sum.cashback));

  const carbonSections = breakdownByUser?.map(item => ({
    value: (Number(item._sum.carbon) / totalCarbon) * 100,
    color: CategoryColors[item.category],
    tooltip: `${item.category} - ${item._sum.carbon} kg`,
  }));

  const cashbackSections = breakdownByUser?.map(item => ({
    value: (Number(item._sum.cashback) / totalCashback) * 100,
    color: CategoryColors[item.category],
    tooltip: `${item.category} - $${Number(item._sum.cashback).toFixed(2)}`,
  }));

  return {
    breakdownByUser,
    carbonSections,
    cashbackSections,
    totalCarbon: _.round(totalCarbon, 1),
    totalCashback: _.round(totalCashback, 2),
    isLoading: catQuery.isLoading,
    isError: catQuery.isError,
  };
};
