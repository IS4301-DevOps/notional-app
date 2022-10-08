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
    return <div>Error: {userQuery.error.message}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Transactions</h1>

        <h2 className='text-md font-medium leading-6 text-gray-900'>Transactions</h2>
        {transactionsQuery.data?.length ? (
          <TransactionList data={transactionsQuery.data} value='cashback' />
        ) : (
          <p className='text-sm leading-6 text-gray-700'>No transactions</p>
        )}
      </div>
    </Layout>
  );
};

export default TransactionsPage;
