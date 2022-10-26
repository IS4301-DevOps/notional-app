import { useMutation, useQuery } from '@tanstack/react-query';
import { User } from '@prisma/client';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Loading from '../../../components/common/Loading';
import Layout from '../../../components/layout/Layout';
import { fetchUser, updateCarbonTarget } from '../../../lib/clientApi';

const SetGoalPage: NextPage = () => {
  const [target, setTarget] = useState(0);
  const mutation = useMutation((target: number) => {
    return updateCarbonTarget('cl849p21n0047x4gjt69x15s2', target);
  });

  const onTargetChanged = e => setTarget(e.target.value);
  const onSaveClicked = () => {
    mutation.mutate(target);
  };

  const userQuery = useQuery<User, AxiosError>(['user'], () => fetchUser('cl849p21n0047x4gjt69x15s2'));

  useEffect(() => {
    if (!userQuery.isLoading && !!userQuery.data) {
      setTarget(userQuery.data.carbonTarget);
    }
  }, [userQuery.status, userQuery.data]);

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    return <div>Error: {userQuery.error.message}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Set Target</h1>
        {/* Main 3 column grid */}
        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
          {/* Right column */}
          <div className='grid grid-cols-1 gap-4'>
            <section aria-labelledby='Carbon-Range-Selector'>
              <div className='overflow-hidden rounded-lg bg-white shadow'>
                <div className='p-6'>
                  <div className='text-left'>
                    <h2 className='text-base font-bold text-gray-900'>Change Monthly Targetted Limit</h2>
                    <p className='text-base font-medium text-gray-900'>I aim to stay at or below this amount of carbon emission:</p>
                  </div>
                  <div className='mt-6 flow-root'></div>
                  <div className='text-center pb-5'>
                    <h2 className='text-5xl font-bold text-gray-900'>{target}</h2>
                    <p className='text-lg'>kg CO₂</p>
                  </div>
                  <input
                    id='carbonTarget-range'
                    name='target'
                    type='range'
                    value={target}
                    onChange={onTargetChanged}
                    min='0'
                    max='1000'
                    step='10'
                    className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  />
                  <div className='text-center pt-4'>
                    {mutation.isLoading ? (
                      <button
                        type='button'
                        disabled
                        className='rounded-md border px-3 py-2 transition ease delay-150 text-sm font-medium leading-4 shadow-xl bg-black text-white border-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                      >
                        Saving...
                      </button>
                    ) : (
                      <>
                        {mutation.isError ? <div>An error occurred</div> : null}
                        <button
                          type='button'
                          onClick={onSaveClicked}
                          className='rounded-md border border-black bg-white px-3 py-2 transition ease delay-150 text-sm font-medium leading-4 text-black shadow-xl hover:bg-black hover:text-white hover:border-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                        >
                          Save
                        </button>
                        {mutation.isSuccess ? (
                          <p className='text-green-500 text-sm font-bold pt-3'>Carbon limit has been updated successfully</p>
                        ) : null}
                      </>
                    )}

                    <p className='text-xs font-medium text-gray-900 pt-8'>
                      Set a limit for your monthly carbon footprint and keep track of your usage to make the world a better place!
                    </p>
                    <p className='text-xs font-medium text-gray-900'>
                      We will notify you once you are nearing your carbon emission limit, or if you have exceeded it.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SetGoalPage;
