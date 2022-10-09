import React from 'react';
import Image from 'next/image';

export default function LeaderboardVerticalCard(props) {
  return (
    <div key={props.index} className='mr-5 ml-5'>
      <img
        className={`${props.index == 1 ? 'h-20 w-20' : 'h-[67px] w-[67px] mt-3.5'} rounded-full mb-2`}
        src={props.person.imageUrl}
        alt=''
      />
      <div className='-translate-x-1.5'>
        <span className='font-bold ml-2 mt-2 items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800'>
          {props.person.name}
        </span>
        <div>
          <span className='relative z-10'>
            <Image alt='me' width='35' height='35' src='/badges/leaderboardtree.png' />
          </span>
          <span className='font-bold relative inline-flex items-center -translate-x-4 -translate-y-3 rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800'>
            {props.person.treesPlanted}
          </span>
        </div>
        <div>
          <span
            style={{ backgroundColor: `${props.person.color}` }}
            className={`ml-7 -translate-y-1 inline-flex h-7 w-7 items-center justify-center rounded-full drop-shadow-lg`}
          >
            <span className='font-bold text-xs leading-none text-black'>{props.person.ranking}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
