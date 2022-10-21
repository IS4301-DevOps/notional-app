import { Text } from '@mantine/core';
import dayjs from 'dayjs';
import { NextPage } from 'next';

import Loading from '../../../components/common/Loading';
import BreakdownList from '../../../components/dashboard/BreakdownList';
import RingProgress from '../../../components/dashboard/RingProgress';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { useCarbonBreakdown } from '../../../hooks/dashboard';
import { useUserQuery } from '../../../hooks/queries';

const tabs = [
  { name: 'Greenhouse', href: '/dashboard', current: false },
  { name: 'Cashback', href: '', current: true },
];

const DashboardCashbackPage: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const { breakdownByUser, cashbackSections, totalCashback, isLoading, isError, exceededLimit } = useCarbonBreakdown(userQuery.data);

  if (userQuery.isLoading || isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <DashboardLayout user={userQuery.data} tabs={tabs} exceededLimit={exceededLimit}>
      <section aria-labelledby='dashboard-chart'>
        <div className='mt-6 flow-root'>
          <RingProgress
            label={
              <div className='flex items-center justify-center'>
                <p className='text-sm font-medium mx-auto hover:underline'>${totalCashback}</p>
              </div>
            }
            sections={cashbackSections}
          />
        </div>
      </section>
      <section aria-labelledby='dashboard-breakdown'>
        <h2 className='text-md font-medium leading-6 text-gray-900'>Breakdown</h2>
        <div className='mt-3 flow-root'>
          {breakdownByUser?.length ? (
            <BreakdownList data={breakdownByUser} value='cashback' />
          ) : (
            <p className='text-sm leading-6 text-gray-700'>No transactions</p>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardCashbackPage;
