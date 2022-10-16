import Image from 'next/image';

import Loading from '../../components/common/Loading';
import Layout from '../../components/layout/Layout';
import Tabs from '../../components/rewards/Tabs';
import { useUserQuery } from '../../hooks/queries';
import lululemon from '../../public/logos/lululemon-logo.svg';
import starbucks from '../../public/logos/starbucks-logo.svg';
import hnm from '../../public/logos/h&m-logo.svg';
import northFace from '../../public/logos/the-north-face-logo.svg';

const tabs = [
  { name: 'Available', href: '#', current: true },
  { name: 'Redeemed', href: '#', current: false },
];

const featured = [
  { name: 'Complimentary Drink', company: 'Starbucks', logo: starbucks, points: 150 },
  { name: '$20 off Next Purchase', company: 'Lululemon', logo: lululemon, points: 200 },
];

const others = [
  { name: '$10 off Regular Price Product', company: 'H&M', logo: hnm, points: 80 },
  { name: '10% off', company: 'The North Face', logo: northFace, points: 25 },
];

const Rewards = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }
  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='container mx-auto sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>Rewards List</h1>
          <h2 className='text-md font-medium leading-6 text-gray-900'>Reward Coupons</h2>
          <div className='mt-6'>
            <Tabs tabs={tabs} />
          </div>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='featured-rewards-list'>
            <ul role='list' className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
              {featured.map(item => (
                <li key={item.name} className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-left shadow'>
                  <div className='flex flex-1 flex-col p-4'>
                    <Image className='mx-auto flex-shrink-0' src={item.logo} alt='company-logo' width={100} height={100} />
                    <h3 className='mt-6 text-sm font-medium text-gray-900'>{item.name}</h3>
                    <dl className='mt-1 flex flex-grow flex-col justify-between'>
                      <dt className='sr-only'>Company</dt>
                      <dd className='text-sm text-gray-500'>{item.company}</dd>
                      <dt className='sr-only'>Points</dt>
                      <dd className='mt-3'>
                        <span className='py-1 text-xs font-medium'>{item.points} points</span>
                      </dd>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='other-rewards-list'>
            <ul role='list' className='grid grid-cols-1 gap-3'>
              {others.map(item => (
                <li key={item.name} className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-left shadow'>
                  <div className='flex justify-between p-4'>
                    <Image className='mx-auto flex-shrink-0' src={item.logo} alt='company-logo' width={80} height={80} />
                    <div className='flex-1 flex-col px-4'>
                      <h3 className='mt-1 text-sm font-medium text-gray-900'>{item.name}</h3>
                      <dl className='mt-1 flex flex-grow flex-col justify-between'>
                        <dt className='sr-only'>Company</dt>
                        <dd className='text-sm text-gray-500'>{item.company}</dd>
                        <dt className='sr-only'>Points</dt>
                        <dd className='mt-3'>
                          <span className='py-1 text-xs font-medium'>{item.points} points</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;
