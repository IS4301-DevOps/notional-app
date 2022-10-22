import { User } from '@prisma/client';
import dayjs from 'dayjs';
import _ from 'lodash';
import { CategoryColors } from '../interfaces/enums';
import { useTransactionsCategoryQuery } from './queries';

export const useCarbonBreakdown = (user: User) => {
  //TODO: change back to current date on presentation day
  const curDate = dayjs('2022-11-30');
  const startDate = curDate.subtract(1, 'month').toDate();
  const endDate = curDate.toDate();
  const catQuery = useTransactionsCategoryQuery(user?.id, startDate, endDate);
  const breakdownByUser = catQuery.data;

  const totalCarbon = _.sumBy(breakdownByUser, item => Number(item._sum.carbon));
  const totalCashback = _.sumBy(breakdownByUser, item => Number(item._sum.cashback));

  const carbonSections = breakdownByUser
    ? breakdownByUser.map(item => ({
        value: (Number(item._sum.carbon) / totalCarbon) * 100,
        color: CategoryColors[item.category],
        tooltip: `${item.category} - ${item._sum.carbon} kg`,
      }))
    : [];

  const cashbackSections = breakdownByUser
    ? breakdownByUser.map(item => ({
        value: (Number(item._sum.cashback) / totalCashback) * 100,
        color: CategoryColors[item.category],
        tooltip: `${item.category} - $${Number(item._sum.cashback).toFixed(2)}`,
      }))
    : [];

  const exceededLimit = totalCarbon > user?.carbonTarget

  return {
    breakdownByUser,
    carbonSections,
    cashbackSections,
    totalCarbon: _.round(totalCarbon, 1),
    totalCashback: _.round(totalCashback, 2),
    isLoading: catQuery.isLoading,
    isError: catQuery.isError,
    exceededLimit
  };
};
