import { NextPage } from 'next';
import Link from 'next/link';
import _ from 'lodash';

import Loading from '../../components/common/Loading';
import RingProgress from '../../components/dashboard/RingProgress';
import { useUserQuery } from '../../hooks/queries';
import BreakdownList from '../../components/dashboard/BreakdownList';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useCarbonBreakdown } from '../../hooks/dashboard';

const tabs = [
  { name: 'Greenhouse', href: '', current: true },
  { name: 'Cashback', href: '/dashboard/cashback', current: false },
];

const DashboardPage: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const { breakdownByUser, carbonSections, totalCarbon, isLoading, isError, exceededLimit } = useCarbonBreakdown(userQuery.data);

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
                <Link href='/dashboard/set-goal'>
                  <a className='text-sm font-medium mx-auto hover:underline'>{totalCarbon} kg</a>
                </Link>
              </div>
            }
            sections={carbonSections}
          />
        </div>
      </section>
      <section aria-labelledby='dashboard-breakdown'>
        <h2 className='text-md font-medium leading-6 text-gray-900'>Breakdown</h2>
        <div className='mt-3 flow-root'>
          {breakdownByUser?.length ? (
            <BreakdownList data={breakdownByUser} value='carbon' />
          ) : (
            <p className='text-sm leading-6 text-gray-700'>No transactions</p>
          )}
        </div>
      </section>
      
    </DashboardLayout>
  );
};

export default DashboardPage;
