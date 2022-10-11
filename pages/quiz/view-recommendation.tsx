import React from 'react';
import Loading from '../../components/common/Loading';
import { useUserQuery } from '../../hooks/queries';
import Layout from '../../components/layout/Layout';
import RecommendationDetails from '../../components/quiz/RecommendationDetails';

export default function ViewRecommendation() {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <>
      <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>Levi's</h1>
          <h2 className='text-md font-bold leading-6 text-gray-900 mb-2'>Levi's</h2>
          <RecommendationDetails />
        </div>
      </Layout>
    </>
  );
}
