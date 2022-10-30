import { User } from '@prisma/client';
import React, { ReactNode } from 'react';
import TreePoints from '../rewards/TreePoints';
import Tabs from '../rewards/Tabs';
import Layout from './Layout';

const tabs = [
  { name: 'Available', href: '/rewards', current: false },
  { name: 'Redeem', href: '/rewards/redeem', current: false },
];

type Props = {
  children?: ReactNode;
  user: User;
};

const RewardsLayout = ({ children, user }: Props) => {
  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={user}>
      <div className='container mx-auto sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>Rewards List</h1>
          <div className='flex justify-between items-center'>
            <h2 className='text-md font-medium leading-6 text-gray-900'>Reward Coupons</h2>
            <TreePoints points={1500}/>
          </div>
          <div className='mt-6'>
            <Tabs tabs={tabs} />
          </div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default RewardsLayout;
