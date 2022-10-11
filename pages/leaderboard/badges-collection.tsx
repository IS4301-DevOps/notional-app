import React from 'react';
import Loading from '../../components/common/Loading';
import { useUserQuery } from '../../hooks/queries';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';

export default function BadgesCollection() {
  const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    const errorMessage = userQuery.error.message;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <>
      <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div>
            <div className='flex justify-between'>
              <strong>Badges Collection</strong>
            </div>
            <div className='rounded shadow-lg mt-3 bg-[#efe6e6] pt-4 pl-4 pr-4 pb-4'>
              <div className='grid grid-cols-3 gap-y-4 text-center'>
                {/* row one */}

                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/carbon_10.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/carbon_50.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/carbon_1k.svg`} />
                </div>

                {/* row two */}

                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/climate_positive_3.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>

                {/* row three */}

                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/sparkly_trees_25.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/sparkly_trees_150.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>

                {/* row four */}

                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/trees_planted_100.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/trees_planted_500.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/trees_planted_1k.svg`} />
                </div>

                {/* row five */}

                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>
                <div>
                  <Image alt='me' width='100' height='100' src={`/badges/locked_climate_positive.svg`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
