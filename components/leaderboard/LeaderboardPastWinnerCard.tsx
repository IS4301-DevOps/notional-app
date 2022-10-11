import React from 'react';
import Image from 'next/image';

export default function LeaderboardPastWinnerCard(props) {
  return (
    <div
      className={`relative flex items-center space-x-3 rounded-lg border border-gray-300 drop-shadow-md bg-white
      } px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400`}
    >
      <div className='flex-shrink-0'>
        <img className='h-[75px] w-[75px] rounded-full' src={props.person.imageUrl} alt='' />
        {/* <Image alt='me' width='64' height='64' src='/badges/sparkly_trees_25.svg' /> */}
      </div>
      <div className='min-w-0 flex-1'>
        <a href='#' className='focus:outline-none'>
          <span className='absolute inset-0' aria-hidden='true' />
          <p className='text-sm font-bold text-gray-900 mb-3'>{props.person.name}</p>
          {props.person.badges.map((badge, index) => (
            <span key={index} className='mr-3'>
              <Image key={index} alt='me' width='45' height='45' src={`/badges/${badge}.svg`} />
            </span>
          ))}
          {/* <p className='truncate text-sm text-gray-500'>{props.person.role}</p> */}
        </a>
      </div>

      <div className='translate-x-6'>
        <div>
          <span className='relative z-10 mr-4'>
            <Image alt='me' width='35' height='35' src='/badges/leaderboard-calendar.svg' />
          </span>
          <span className='font-bold relative inline-flex items-center -translate-x-6 -translate-y-3 rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800'>
            {props.person.date}
          </span>
        </div>
        <div className='ml-4'>
          <span className='relative z-10'>
            <Image alt='me' width='35' height='35' src='/badges/leaderboardtree.png' />
          </span>
          <span className='font-bold relative inline-flex items-center -translate-x-4 -translate-y-3 rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800'>
            {props.person.treesPlanted}
          </span>
        </div>
      </div>
    </div>
  );
}
