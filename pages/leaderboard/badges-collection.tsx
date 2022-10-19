import React from 'react';
import Loading from '../../components/common/Loading';
import { useUserQuery } from '../../hooks/queries';
import Layout from '../../components/layout/Layout';
import Badges from '../../components/leaderboard/BadgesCollection';
import { useRouter } from 'next/router';

export default function BadgesCollection() {
  const router = useRouter();
  const rank = Number(router.query.rank);

  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  const steven = [
    'carbon_10',
    'carbon_50',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'sparkly_trees_25',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
  ];

  const brayden = [
    'carbon_10',
    'carbon_50',
    'carbon_100',
    'climate_positive_3',
    'climate_positive_6',
    'locked_climate_positive',
    'sparkly_trees_25',
    'sparkly_trees_150',
    'locked_climate_positive',
    'trees_planted_100',
    'trees_planted_1k',
    'trees_planted_5k',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
  ];

  const eunice = [
    'carbon_10',
    'carbon_50',
    'carbon_100',
    'climate_positive_3',
    'locked_climate_positive',
    'locked_climate_positive',
    'sparkly_trees_25',
    'locked_climate_positive',
    'locked_climate_positive',
    'trees_planted_100',
    'trees_planted_1k',
    'trees_planted_5k',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
  ];

  const simran = [
    'carbon_10',
    'carbon_50',
    'carbon_100',
    'climate_positive_3',
    'climate_positive_6',
    'climate_positive_12',
    'sparkly_trees_25',
    'locked_climate_positive',
    'locked_climate_positive',
    'trees_planted_100',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
    'locked_climate_positive',
  ];

  return (
    <>
      <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div>
            <div className='flex justify-between'>
              <strong>Badges Collection</strong>
            </div>
            {rank == 7 && <Badges list={steven} />}
            {rank == 1 && <Badges list={brayden} />}
            {rank == 2 && <Badges list={eunice} />}
            {rank == 3 && <Badges list={simran} />}
          </div>
        </div>
      </Layout>
    </>
  );
}
