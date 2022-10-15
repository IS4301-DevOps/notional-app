import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Loading from '../../components/common/Loading';
import Layout from '../../components/layout/Layout';
import RatingList from '../../components/recommend/RatingList';
import { useUserQuery } from '../../hooks/queries';

const ratings = [
  { company: 'Lululemon', logo: '', rating: 9.1 },
  { company: 'Patagonia', logo: '', rating: 9.0 },
  { company: 'Nike', logo: '', rating: 8.7 },
  { company: 'Deckers Outdoor', logo: '', rating: 8.2 },
  { company: 'Patagonia', logo: '', rating: 9.0 },
  { company: 'Nike', logo: '', rating: 8.7 },
  { company: 'Deckers Outdoor', logo: '', rating: 8.2 },
  { company: 'Patagonia', logo: '', rating: 9.0 },
  { company: 'Nike', logo: '', rating: 8.7 },
  { company: 'Deckers Outdoor', logo: '', rating: 8.2 },
  { company: 'Patagonia', logo: '', rating: 9.0 },
  { company: 'Nike', logo: '', rating: 8.7 },
  { company: 'Deckers Outdoor', logo: '', rating: 8.2 },
  { company: 'Patagonia', logo: '', rating: 9.0 },
  { company: 'Nike', logo: '', rating: 8.7 },
  { company: 'Deckers Outdoor', logo: '', rating: 8.2 },
];

const Recommend = () => {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <Layout title='LiveBetter | DBS Bank' heading='Recommend' user={userQuery.data}>
      <div className='container mx-auto sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h1 className='sr-only'>Top ESG Companies</h1>
          <h2 className='text-md font-medium leading-6 text-gray-900'>Top ESG Companies</h2>
          <section className='mt-6 max-h-full overflow-scroll' aria-labelledby='transactions-list'>
            <div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
              <div className='w-full max-w-lg lg:max-w-xs'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                  </div>
                  <input
                    id='search'
                    name='search'
                    className='block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </div>
            </div>
            <div className='py-3'>
              {ratings.length ? (
                <div className='mt-3'>
                  <RatingList data={ratings} />
                </div>
              ) : (
                <p className='text-sm leading-6 text-gray-700'>No transactions</p>
              )}
            </div>
          </section>
          <section aria-labelledby='start-quiz'>
            <div className='sticky bottom-0'>
              <div className='rounded-lg bg-orange-100 px-4 py-2 sm:px-6 text-center space-y-2'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>Want more personalised recommendations?</h3>
                <button
                  type='button'
                  className='inline-flex items-center rounded-md border border-green-600 bg-white px-3 py-2 text-sm font-semibold leading-4 text-green-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                >
                  Take Recommendation Quiz
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Recommend;
