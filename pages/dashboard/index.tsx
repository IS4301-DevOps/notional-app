import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DashboardCard from '../../components/landing/DashboardCard';
import Layout from '../../components/layout/Layout';
import { fetchUser } from '../../lib/clientApi';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const DashboardPage = () => {
  const { isLoading, error, data, isFetching } = useQuery(['user'], fetchUser);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={data.user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Dashboard</h1>
        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Right column */}
          <div className='grid grid-cols-1 gap-4'>
            {/* Dashboard Card */}
            <section aria-labelledby='announcements-title'>
              <DashboardCard />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
