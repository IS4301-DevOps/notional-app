import { User } from '@prisma/client';
import Link from 'next/link';
import React, { Children, ReactNode } from 'react';
import { Tab } from '../../interfaces';
import Tabs from '../dashboard/Tabs';
import Layout from './Layout';

type Props = {
  user: User;
  tabs: Tab[];
  children?: ReactNode;
};

const DashboardLayout = ({ user, tabs, children }: Props) => {
  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Dashboard</h1>
        <div className='flex justify-between items-center'>
          <h2 className='text-md font-medium leading-6 text-gray-900'>Dashboard</h2>
          <Link href='/transactions'>
            <a className='text-sm underline text-green-600'>View all transactions</a>
          </Link>
        </div>
        <div className='mt-6'>
          <Tabs tabs={tabs} />
        </div>
        <section className='mt-6' aria-labelledby='dashboard-card'>
          <div className='overflow-hidden rounded-lg bg-white shadow'>
            <div className='p-6'>
              <div className='text-center'>
                {/* TODO: Replace with month carousel */}
                <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
                  September
                </h2>
              </div>
              {children}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
