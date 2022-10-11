import React from 'react';
import LeaderboardPastWinners from '../../components/leaderboard/LeaderboardPastWinners';
import Loading from '../../components/common/Loading';
import Layout from '../../components/layout/Layout';
import LeaderboardList from '../../components/leaderboard/LeaderboardList';
import { useUserQuery } from '../../hooks/queries';
import LeaderboardTopRankings from '../../components/leaderboard/LeaderboardTopRankings';
import { Icon } from '@iconify/react';

export default function PastWinners() {
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
        <div>
          <div className='flex justify-between'>
            <strong>Past Winners</strong>
          </div>
          <div className='rounded shadow-lg mt-3 bg-[#B1D7B4] pt-4 pl-4 pr-4 pb-4'>
            <LeaderboardPastWinners />
          </div>
        </div>
      </div>
    </Layout>
  );
}
