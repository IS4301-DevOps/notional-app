import dayjs from 'dayjs';
import { NextPage } from 'next';
import Link from 'next/link';

import Loading from '../../components/common/Loading';
import RingProgress from '../../components/dashboard/RingProgress';
import { useTransactionsCategoryQuery, useUserQuery } from '../../hooks/queries';
import BreakdownList from '../../components/dashboard/BreakdownList';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { CategoryColors } from '../../interfaces/enums';

const tabs = [
  { name: 'Greenhouse', href: '', current: true },
  { name: 'Cashback', href: '/dashboard/cashback', current: false },
];

const DashboardPage: NextPage = () => {
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

  const secs = catQuery.data.map(item => ({
    value: (Number(item._sum.carbon) / carbonTarget) * 100,
    color: CategoryColors[item.category],
    tooltip: `${item.category} - ${item._sum.carbon} kg`,
  }));
  console.log(secs);
  return (
    <DashboardLayout user={userQuery.data} tabs={tabs}>
      <section aria-labelledby='dashboard-chart'>
        <div className='mt-6 flow-root'>
          <RingProgress
            label={
              <div className='flex items-center justify-center'>
                <Link href='/dashboard/set-goal'>
                  <a className='text-sm font-medium mx-auto hover:underline'>{carbonTarget.toString()} kg</a>
                </Link>
              </div>
            }
            sections={secs}
          />
        </div>
      </section>
      <section aria-labelledby='dashboard-breakdown'>
        <h2 className='text-md font-medium leading-6 text-gray-900'>Breakdown</h2>
        <div className='mt-3 flow-root'>
          {catQuery.data?.length ? (
            <BreakdownList data={catQuery.data} value='carbon' />
          ) : (
            <p className='text-sm leading-6 text-gray-700'>No transactions</p>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPage;
