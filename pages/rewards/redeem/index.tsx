import Loading from '../../../components/common/Loading';
import RewardsLayout from '../../../components/layout/RewardsLayout';
import { useUserQuery } from '../../../hooks/queries';
import starbucks from '../../../public/logos/starbucks-logo.svg';
import hnm from '../../../public/logos/h&m-logo.svg';
import fairprice from '../../../public/logos/fairprice-logo.svg';
import foodpanda from '../../../public/logos/foodpanda-logo.svg';
import Image from 'next/image';

const rewards = [
  {
    id: 1,
    name: '$10 off at Starbucks',
    company: 'Starbucks',
    details: ['05/06/2022 - 09/12/2022', 'With min $10 spent'],
    logo: starbucks,
    code: 'GOGREEN2022'
  },
  {
    id: 2,
    name: '$20 off at H&M',
    company: 'Lululemon',
    details: ['05/06/2022 - 09/12/2022', 'With min $10 spent'],
    logo: hnm,
    code: 'LIVEBETTER22',
  },{
    id: 3,
    name: '$20 off at FairPrice',
    company: 'Fairprice',
    details: ['05/06/2022 - 09/12/2022', 'With min $10 spent'],
    logo: fairprice,
    code: 'LIVEBETTER22',
  },{
    id: 4,
    name: '10% off at FoodPanda',
    company: 'FoodPanda',
    details: ['05/06/2022 - 09/12/2022', 'With min $10 spent'],
    logo: foodpanda,
    code: 'SAVE44',
  },
];

const RewardsRedeem = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }
  return (
    <RewardsLayout user={userQuery.data}>
      <section className='mt-3 max-h-full overflow-auto' aria-labelledby='rewards-list'>
        <div className='mt-3'>
          <ul role='list' className='grid grid-cols-2 divide-x divide-y md:grid-cols-3 lg:grid-cols-4'>
            {rewards.map(item => (
              <li key={item.name} className='col-span-1 flex flex-col divide-gray-200  bg-white text-left'>
                <div className='flex flex-grow flex-col items-start p-4'>
                  <Image className='mx-auto flex-shrink-0' src={item.logo} alt='company-logo' width={70} height={40} />
                  <h3 className='mt-6 text-sm font-bold text-gray-900'>{item.name}</h3>
                  <dl className='mt-1 flex flex-grow flex-col'>
                    <dt className='sr-only'>Details</dt>
                    <dd className='prose prose-sm prose-indigo mx-auto mt-1 text-xs text-gray-500'>
                      <ul role='list' className='pl-4'>
                        {item?.details.map(detail => (
                          <li key={detail} className='pl-0.5'>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </dd>
                    <dt className='sr-only'>Code</dt>
                    <dd className='mt-3'>
                      <span className='inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-primary uppercase'>
                        {item.code}
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </RewardsLayout>
  );
};

export default RewardsRedeem;
