import { Text } from '@mantine/core';
import { Transaction, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { NextPage } from 'next';

import Loading from '../../components/common/Loading';
import RingProgress from '../../components/dashboard/RingProgress';
import Tabs from '../../components/dashboard/Tabs';
import Layout from '../../components/layout/Layout';
import { fetchUser, fetchUserTransactions } from '../../lib/clientApi';

const tabs = [
  { name: 'Greenhouse', href: '#', current: false },
  { name: 'Cashback', href: '#', current: true },
];

const sections = [
  { value: 40, color: 'cyan', tooltip: 'Fashion – 40 kg' },
  { value: 25, color: 'orange', tooltip: 'Food – 25 kg' },
  { value: 15, color: 'grape', tooltip: 'Gas – 15 kg' },
];

const DashboardPage: NextPage = () => {
  const userQuery = useQuery<User, AxiosError>(['user'], () => fetchUser('cl849p21n0047x4gjt69x15s2'));
  const { id: userId, carbonTarget } = userQuery.data;
  const transactionsQuery = useQuery<Transaction[], AxiosError>(['transactions'], () => fetchUserTransactions(userId), {
    //only fire if userId exists
    enabled: !!userId,
  });

  if (userQuery.isLoading || transactionsQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || transactionsQuery.isError) {
    return <div>Error: {userQuery.error.message}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Dashboard</h1>
        <Tabs tabs={tabs} />
        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Right column */}
          <div className='grid grid-cols-1 gap-4'>
            {/* Dashboard Card */}
            <section aria-labelledby='dashboard-chart'>
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
