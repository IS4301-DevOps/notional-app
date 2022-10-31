import { User } from '@prisma/client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Tab } from '../../interfaces';
import MonthCarousel from '../dashboard/MonthCarousel';
import Tabs from '../dashboard/Tabs';
import Layout from './Layout';
import Image from 'next/image';
import GoalCard from '../dashboard/GoalCard';

type Props = {
  user: User;
  tabs: Tab[];
  exceededLimit: boolean;
  children?: ReactNode;
};

const DashboardLayout = ({ user, tabs, exceededLimit, children }: Props) => {
  const progressCardText = exceededLimit
    ? 'You have exceeded your carbon limit this month.'
    : 'You have not exceeded your carbon limit this month.';

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Dashboard</h1>
        <div className='container mx-auto sm:px-6 lg:px-8 space-y-4'>
          <div className='flex justify-between items-center'>
            <h2 className='text-md font-medium leading-6 text-gray-900'>Dashboard</h2>
            <Link href='/transactions'>
              <a className='text-sm underline text-green-600'>View All Transactions</a>
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
                  {/* <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
                  September
                </h2> */}
                  <MonthCarousel />
                </div>
                {children}
              </div>
            </div>
          </section>
          <section aria-labelledby='goal-card'>
            <GoalCard cardText={progressCardText} />
          </section>
          <section className='mt-6' aria-labelledby='dashboard-card'>
            <div className='overflow-hidden rounded-lg bg-white shadow'>
              <div className='p-6'>
                <div className='text-center'>
                  <p className='text-2xl font-bold text-gray-900 pb-10'>
                    {window.location.pathname === '/dashboard' ? 'How to reduce Carbon Footprint?' : 'How to earn Cashback?'}
                  </p>
                  <Image src='https://img.icons8.com/bubbles/200/000000/shop.png' width={150} height={150} alt='browse' />
                  <p className='text-base font-semibold text-gray-900'>Step 1: Browse for vendor</p>
                  <p className='text-base text-gray-900 pb-10'>
                    <span className='underline'>
                      <Link href={'/recommend'} className=''>
                        Click here
                      </Link>
                    </span>
                    &nbsp;to look for participating vendors which&nbsp;
                    {window.location.pathname === '/dashboard'
                      ? 'have a high ESG ratings which will reduce your carbon footprint!'
                      : 'will provide you with a cashback on each transaction!'}
                  </p>
                  <Image src='https://img.icons8.com/bubbles/200/000000/buy.png' width={150} height={150} alt='browse' />
                  <p className='text-base font-semibold text-gray-900'>Step 2: Shop with participating vendor</p>
                  <p className='text-base text-gray-900 pb-10'>
                    Make a purchase with your DBS LiveFresh card to automatically earn a cashback! Both online and offline methods are
                    accepted.
                  </p>
                  {window.location.pathname === '/dashboard' ? (
                    <>
                      <Image src='https://img.icons8.com/bubbles/200/000000/eco-fuel.png' width={150} height={150} alt='browse' />
                      <p className='text-base font-semibold text-gray-900'>Step 3: Make a difference!</p>
                      <p className='text-base text-gray-900 pb-10'>
                        Congratulations! You have made a difference by shopping with an ESG company!
                      </p>
                    </>
                  ) : (
                    <>
                      <Image src='https://img.icons8.com/bubbles/200/000000/cash.png' width={150} height={150} alt='browse' />
                      <p className='text-base font-semibold text-gray-900'>Step 3: Earn cashback!</p>
                      <p className='text-base text-gray-900 pb-10'>
                        Cashback will be credited right into your card once the transaction has been confirmed!
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
