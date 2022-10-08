import { Text } from '@mantine/core';
import dayjs from 'dayjs';
import { NextPage } from 'next';

import Loading from '../../../components/common/Loading';
import BreakdownList from '../../../components/dashboard/BreakdownList';
import RingProgress from '../../../components/dashboard/RingProgress';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { useTransactionsCategoryQuery, useUserQuery } from '../../../hooks/queries';

const tabs = [
  { name: 'Greenhouse', href: '/dashboard', current: false },
  { name: 'Cashback', href: '', current: true },
];

const sections = [
  { value: 40, color: 'cyan', tooltip: 'Fashion – 40 kg' },
  { value: 25, color: 'orange', tooltip: 'Food – 25 kg' },
  { value: 15, color: 'grape', tooltip: 'Gas – 15 kg' },
];

const DashboardCashbackPage: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const curDate = dayjs();
  const startDate = curDate.subtract(1, 'month').toDate();
  const endDate = curDate.toDate();
  const catQuery = useTransactionsCategoryQuery(userQuery.data?.id, startDate, endDate);

  if (userQuery.isLoading || catQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || catQuery.isError) {
    const errorMessage = userQuery.isError ? userQuery.error.message : catQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  const { carbonTarget } = userQuery.data;

  return (
    <DashboardLayout user={userQuery.data} tabs={tabs}>
      <section aria-labelledby='dashboard-chart'>
        <div className='mt-6 flow-root'>
          <RingProgress
            label={
              <Text size='xs' align='center' px='xs' sx={{ pointerEvents: 'none' }}>
                {/* Replace with total cashback */}
                {carbonTarget.toString()} kg
              </Text>
            }
            sections={sections}
          />
        </div>
      </section>
      <section aria-labelledby='dashboard-breakdown'>
        <h2 className='text-md font-medium leading-6 text-gray-900'>Breakdown</h2>
        <div className='mt-6 flow-root'>
          {catQuery.data?.length ? (
            <BreakdownList data={catQuery.data} value='cashback' />
          ) : (
            <p className='text-sm leading-6 text-gray-700'>No transactions</p>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardCashbackPage;
