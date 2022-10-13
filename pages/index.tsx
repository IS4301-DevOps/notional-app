import { useQuery } from '@tanstack/react-query';
import { Post, Tip, User } from '@prisma/client';
import { AxiosError } from 'axios';
import { NextPage } from 'next';

import Carousel from '../components/landing/Carousel';
import Layout from '../components/layout/Layout';
import Loading from '../components/common/Loading';
import ActionPanel from '../components/landing/ActionPanel';
import DashboardCard from '../components/landing/DashboardCard';
import TipCard from '../components/landing/TipCard';
import { getAllPosts, getTodayTip } from '../lib/clientApi';
import { useUserQuery } from '../hooks/queries';
import { useCarbonBreakdown } from '../hooks/dashboard';

const Home: NextPage = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const postsQuery = useQuery<Post[], AxiosError>(['posts'], getAllPosts);
  const tipQuery = useQuery<Tip, AxiosError>(['tip'], getTodayTip);
  const { carbonSections, cashbackSections, totalCarbon, totalCashback } = useCarbonBreakdown(userQuery.data);

  //TODO: add LoadingOverlay
  if (userQuery.isLoading || postsQuery.isLoading || tipQuery.isLoading) {
    return <Loading />;
  }

  const { carbonTarget } = userQuery.data;

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Landing</h1>

        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
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
          </div>

          {/* Right column */}
          <div className='grid grid-cols-1 gap-4'>
            {/* Dashboard Card */}
            <section aria-labelledby='dashboard-card'>
              <DashboardCard carbonTarget={carbonTarget} sections={[carbonSections, cashbackSections]} totals={[totalCarbon, totalCashback]}/>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
