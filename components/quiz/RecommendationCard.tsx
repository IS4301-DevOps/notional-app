import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Used for recommonedation result

export default function RecommendationCard(props) {
  return (
    <Link href='/quiz/view-recommendation'>
      <div className='relative  rounded-lg border border-gray-300 bg-white px-6 py-5 drop-shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
        <div className='align-middle; text-center'>
          <Image objectFit='cover' width='350px' height='100px' src={`/recommendation-results/${props.shop.imageURL}.svg`} alt='' />
        </div>
        <div className='min-w-0 flex-1'>
          <a href='#' className='focus:outline-none'>
            <span className='absolute inset-0' aria-hidden='true' />
            <div className='flex'>
              <p className='text-sm font-bold text-gray-900 mr-1'>{props.shop.name}</p>
              <Image width='10' height='10' src='/recommendation-results/verified.svg' alt='' />
            </div>
            <div className='flex'>
              <Image width='10' height='10' src='/recommendation-results/map-pin.svg' alt='' />
              <p className='ml-1 truncate text-sm text-[#7E8392]'>{props.shop.type}</p>
            </div>
          </a>
        </div>
      </div>
    </Link>
  );
}
