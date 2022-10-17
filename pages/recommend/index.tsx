import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Loading from '../../components/common/Loading';
import Layout from '../../components/layout/Layout';
import RatingList from '../../components/recommend/RatingList';
import { useUserQuery } from '../../hooks/queries';
import lululemon from '../../public/logos/lululemon-logo.svg';
import patagonia from '../../public/logos/patagonia-logo.svg';
import nike from '../../public/logos/nike-logo.svg';
import deckersOutdoor from '../../public/logos/deckers-outdoor-logo.svg';
import adidas from '../../public/logos/adidas-logo.svg';
import { sortRatings } from '../../utils/helpers';
import SearchBar from '../../components/recommend/SearchBar';

const SORT_DEFAULT = 'desc';

const ratings = [
  { company: 'Lululemon', logo: lululemon, rating: 9.1 },
  { company: 'Patagonia', logo: patagonia, rating: 9.0 },
  { company: 'Nike', logo: nike, rating: 8.7 },
  { company: 'Deckers Outdoor', logo: deckersOutdoor, rating: 8.2 },
  { company: 'Adidas', logo: adidas, rating: 8.1 },
];

const Recommend = () => {
  const router = useRouter();
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
  const [sortBy, setSortBy] = useState(SORT_DEFAULT);
  const [data, setData] = useState(sortRatings(ratings, SORT_DEFAULT));

  const handleRouteToQuiz = () => router.push('/quiz');

  const handleSort = () => {
    const sortMethod = sortBy === 'desc' ? 'asc' : 'desc';
    setData(sortRatings(ratings, sortMethod));
    setSortBy(sortMethod);
  };

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
          <h1 className='sr-only'>Top ESG Companies</h1>
          <h2 className='text-md font-medium leading-6 text-gray-900'>Top ESG Companies</h2>
          <section className='mt-6 max-h-full overflow-auto' aria-labelledby='transactions-list'>
            <div className='flex flex-1 items-center justify-center lg:ml-6 lg:justify-end'>
              <SearchBar />
              <button onClick={handleSort} className='ml-3 h-6 w-6 rounded-full text-gray-400 hover:text-gray-500'>
                {sortBy === 'asc' ? <BarsArrowDownIcon /> : <BarsArrowUpIcon />}
              </button>
            </div>
            <div className='py-3'>
              {ratings.length ? (
                <div className='mt-3 bg-white rounded-lg shadow'>
                  <div className='py-3 px-6'>

                  <RatingList data={data} />
                  </div>
                </div>
              ) : (
                <p className='text-sm leading-6 text-gray-700'>No rankings</p>
              )}
            </div>
          </section>
          <section aria-labelledby='start-quiz'>
            <div className='sticky bottom-0'>
              <div className='rounded-lg bg-orange-100 px-4 py-2 sm:px-6 text-center space-y-2'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>Want more personalised recommendations?</h3>
                <button
                  type='button'
                  onClick={handleRouteToQuiz}
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
