import { Transaction } from '@prisma/client';
import dayjs from 'dayjs';
import _ from 'lodash';
import React from 'react';

import Loading from '../../components/common/Loading';
import TransactionList from '../../components/dashboard/TransactionList';
import Layout from '../../components/layout/Layout';
import { useTransactionsQuery, useUserQuery } from '../../hooks/queries';

const TransactionsPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const transactionsQuery = useTransactionsQuery(userQuery.data?.id);

  if (userQuery.isLoading || transactionsQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || transactionsQuery.isError) {
    const errorMessage = userQuery.isError ? userQuery.error.message : transactionsQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  const processData = (data: Transaction[]) => {
    return _.groupBy(data, item => dayjs(item.timeStamp).format('D MMMM YYYY'));
  };

  const transactions = processData(transactionsQuery.data);

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Transactions</h1>
        <h2 className='text-md font-medium leading-6 text-gray-900'>Transactions</h2>
        <section className='mt-6' aria-labelledby='transactions-list'>
          <div className='overflow-hidden rounded-lg bg-white shadow'>
            <div className='px-6 py-3'>
              {!_.isEmpty(transactions) ? (
                Object.entries(transactions).map(item => (
                  <div key={item[0]} className='mt-3'>
                    <p className='sticky top-0 text-sm font-bold leading-6 text-gray-900'>{item[0]}</p>
                    <TransactionList data={item[1]} value='cashback' />
                  </div>
                ))
              ) : (
                <p className='text-sm leading-6 text-gray-700'>No transactions</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TransactionsPage;
