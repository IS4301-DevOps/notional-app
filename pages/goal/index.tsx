import Image from 'next/image';
import Link from 'next/link';
import Loading from '../../components/common/Loading';
import RingProgress from '../../components/dashboard/RingProgress';
import Layout from '../../components/layout/Layout';
import { useCarbonBreakdown } from '../../hooks/dashboard';
import { useUserQuery } from '../../hooks/queries';

const list = ['carbon_10', 'carbon_50', 'locked_climate_positive', 'locked_climate_positive', 'locked_climate_positive'];

const GoalSetting = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const { totalCarbon } = useCarbonBreakdown(userQuery.data);

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  const { carbonTarget } = userQuery?.data;

  const carbon = (totalCarbon / carbonTarget) * 100;

  const progressCardText =
    totalCarbon > carbonTarget
      ? 'You have exceeded your carbon limit this month.\nTry again next month.'
      : 'You have not exceeded your carbon limit this month.\nKeep up the good work!';

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Goal Setting</h1>
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-md font-medium leading-6 text-gray-900'>Goal Setting</h2>
            <Link href='goal/set-goal'>
              <a className='text-sm underline text-primary'>Change Monthly Goals</a>
            </Link>
          </div>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='badges-this-month'>
            <h2 className='text-sm font-semibold leading-6 text-gray-500'>Badges earned this month</h2>
            <div className='mt-3'>
              <div className='flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8'>
                {list.map((badge, idx) => (
                  <div key={idx}>
                    <Image src={`/badges/${badge}.svg`} width={60} height={60} alt='badge' className='col-span-1'/>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='goal-progress'>
            <h2 className='text-sm font-semibold leading-6 text-gray-500'>
              Amount of CO<sub>2</sub>e reduced
            </h2>
            <div className='mt-3'>
              <RingProgress
                size={200}
                label={
                  <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm text-primary font-xs mx-auto'>
                      {totalCarbon} kg / {carbonTarget} kg
                    </p>
                    <p className='text-sm text-primary font-xs font-semibold mx-auto'>
                      CO<sub>2</sub>e
                    </p>
                  </div>
                }
                sections={[{ value: carbon, color: '#B1D7B4', tooltip: `${carbon.toFixed(2)}%` }]}
              />
            </div>
          </section>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='progress-card'>
            <div className='rounded-lg border border-accent bg-orange-100 px-4 py-2 sm:px-6 text-center space-y-2'>
              <p className='text-sm font-semibold leading-6 text-gray-500 whitespace-pre-line md:whitespace-normal'>{progressCardText}</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default GoalSetting;
