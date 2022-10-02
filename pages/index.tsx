import { NextPage } from 'next';

import Carousel from '../components/landing/Carousel';
import Layout from '../components/layout/Layout';
import Loading from '../components/common/Loading';
import ActionPanel from '../components/landing/ActionPanel';
import DashboardCard from '../components/landing/DashboardCard';
import TipCard from '../components/landing/TipCard';
import { useQuery } from '@tanstack/react-query';
import { Post, User } from '@prisma/client';
import { AxiosError } from 'axios';
import { fetchUser, getAllPosts, getTodayTip } from '../lib/clientApi';

const Home: NextPage = () => {
  const userQuery = useQuery<User, AxiosError>(['user'], () => fetchUser('cl849p21n0047x4gjt69x15s2'));
  const { carbonTarget } = userQuery.data;
  const postsQuery = useQuery<Post[], AxiosError>(['posts'], getAllPosts);
  const tipQuery = useQuery(['tip'], getTodayTip);

  //TODO: add LoadingOverlay
  if (userQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Landing</h1>

        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Left column */}
          <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
            {/* Welcome panel */}
            {/* <section aria-labelledby='profile-overview-title'>
              <WelcomeCard user={user} />
            </section> */}
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
            <section aria-labelledby='announcements-title'>
              <DashboardCard carbonTarget={carbonTarget}/>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
