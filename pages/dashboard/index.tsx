import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';
import DashboardCard from '../../components/landing/DashboardCard';
import Layout from '../../components/layout/Layout';
import { User } from '../../interfaces';
import { fetchUser } from '../../lib/clientApi';

const DashboardPage = () => {
  const { isLoading, error, data: user, isFetching } = useQuery<User, AxiosError>(['user'], fetchUser);

  //TODO: add LoadingOverlay
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={user}>
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
