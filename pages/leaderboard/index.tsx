import React from 'react';
import Loading from '../../components/common/Loading';
import Layout from '../../components/layout/Layout';
import LeaderboardList from '../../components/leaderboard/LeaderboardList';
import { useUserQuery } from '../../hooks/queries';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import LeaderboardTopRankings from '../../components/leaderboard/LeaderboardTopRankings';

const LeaderboardPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between'>
          <h2 className='text-md font-bold leading-6 text-gray-900 mb-6'>Leaderboard</h2>
          <Link href='/leaderboard/past-winners'>
            <button className='text-sm font-semibold mr-2 text-gray-500'>
              Past Winners
              <Icon className='inline' icon='heroicons-outline:chevron-right' />
            </button>
          </Link>
        </div>
        <h1 className='sr-only'>Leaderboard</h1>

        <div className='flex justify-evenly mb-4'>
          <LeaderboardTopRankings />
        </div>
        <div>
          <div>
            <strong>Rankings this month</strong>
          </div>
          <div className='rounded shadow-lg mt-3 bg-[#B1D7B4] pt-4 pl-4 pr-4 pb-4'>
            <LeaderboardList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeaderboardPage;
