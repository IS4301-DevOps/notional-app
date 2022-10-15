import { NextPage } from 'next';

import Carousel from '../components/landing/Carousel';
import Layout from '../components/layout/Layout';
import Loading from '../components/common/Loading';
import ActionPanel from '../components/landing/ActionPanel';
import DashboardCard from '../components/landing/DashboardCard';
import TipCard from '../components/landing/TipCard';
import { usePostsQuery, useTipQuery, useUserQuery } from '../hooks/queries';
import { useCarbonBreakdown } from '../hooks/dashboard';

const Home: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const postsQuery = usePostsQuery();
  const tipQuery = useTipQuery();
  const { carbonSections, cashbackSections, totalCarbon, totalCashback, isLoading, isError } = useCarbonBreakdown(userQuery.data);

  //TODO: add LoadingOverlay
  if (userQuery.isLoading || postsQuery.isLoading || tipQuery.isLoading || isLoading) {
    return <Loading />;
  }

  if (userQuery.isError || isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Landing</h1>

        {/* Main 3 column grid */}
        <div className='container mx-auto sm:px-6 lg:px-8 space-y-4'>
          {/* Left column */}
          {/* <div className='grid grid-cols-1 gap-4 lg:col-span-2'> */}
            <section aria-labelledby='tip-card'>
              <TipCard data={tipQuery.data} />
            </section>
            <section aria-labelledby='article-carousel'>
              <Carousel data={postsQuery.data} />
            </section>
            {/* Actions panel */}
            <section aria-labelledby='quick-links-title'>
              <ActionPanel />
            </section>
          {/* </div> */}

          {/* Right column */}
          {/* <div className='grid grid-cols-1 gap-4'> */}
            {/* Dashboard Card */}
            <section aria-labelledby='dashboard-card'>
              <DashboardCard sections={[carbonSections, cashbackSections]} totals={[totalCarbon, totalCashback]} />
            </section>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
