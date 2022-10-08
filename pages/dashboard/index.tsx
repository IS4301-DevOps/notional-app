import { Text } from '@mantine/core';
import { NextPage } from 'next';
import Link from 'next/link';

import Loading from '../../components/common/Loading';
import RingProgress from '../../components/dashboard/RingProgress';
import Tabs from '../../components/dashboard/Tabs';
import TransactionList from '../../components/dashboard/TransactionList';
import Layout from '../../components/layout/Layout';
import dayjs from 'dayjs';
import { useTransactionsCategoryQuery, useTransactionsDateQuery, useUserQuery } from '../../hooks/queries';

const tabs = [
  { name: 'Greenhouse', href: '', current: true },
  { name: 'Cashback', href: '/dashboard/cashback', current: false },
];

const sections = [
  { value: 40, color: 'cyan', tooltip: 'Fashion – 40 kg' },
  { value: 25, color: 'orange', tooltip: 'Food – 25 kg' },
  { value: 15, color: 'grape', tooltip: 'Gas – 15 kg' },
];

const DashboardPage: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const curDate = dayjs();
  const startDate = curDate.subtract(1, 'month').toDate();
  const endDate = curDate.toDate();
  const transactionsQuery = useTransactionsDateQuery(userQuery.data?.id, startDate, endDate);
  const catQuery = useTransactionsCategoryQuery(userQuery.data?.id, startDate, endDate);

  if (userQuery.isLoading || transactionsQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || transactionsQuery.isError) {
    return <div>Error: {userQuery.error.message}</div>;
  }

  const { carbonTarget } = userQuery.data;
  console.log(catQuery.data);
  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Dashboard</h1>
        <div className='flex justify-between items-center'>
          <h2 className='text-md font-medium leading-6 text-gray-900'>Dashboard</h2>
          <Link href='/transactions'>
            <a className='text-sm underline text-green-600'>View all transactions</a>
          </Link>
        </div>
        <div className='mt-6'>
          <Tabs tabs={tabs} />
        </div>
        {/* Dashboard Card */}
        <div className='mt-6' aria-labelledby='dashboard-card'>
          <div className='overflow-hidden rounded-lg bg-white shadow'>
            <div className='p-6'>
              <div className='text-center'>
                {/* TODO: Replace with month carousel */}
                <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
                  September
                </h2>
              </div>
              <div className='mt-6 flow-root'>
                <RingProgress
                  label={
                    <Text size='xs' align='center' px='xs' sx={{ pointerEvents: 'none' }}>
                      {carbonTarget.toString()} kg
                    </Text>
                  }
                  sections={sections}
                />
              </div>
              <section aria-labelledby='dashboard-breakdown'>
                <h2 className='text-md font-medium leading-6 text-gray-900'>Breakdown</h2>
                <div className='mt-6 flow-root'>
                  {transactionsQuery.data?.length ? (
                    <TransactionList data={transactionsQuery.data} value='carbon' />
                  ) : (
                    <p className='text-sm leading-6 text-gray-700'>Breakdown</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
