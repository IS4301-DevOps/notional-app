import React from 'react';
import Image from 'next/image';

type Person = {
  name: string;
  imageUrl: string;
  ranking: string;
  treesPlanted: string;
  color: string;
};

type Props = {
  index: number;
  person: Person;
};

export default function LeaderboardVerticalCard(props: Props) {
  return (
    <div key={props.index} className='flex flex-col justify-center w-full'>
      <div className='relative mx-auto'>
        <Image
          className='rounded-full'
          src={props.person.imageUrl}
          width={props.index === 1 ? 80 : 65}
          height={props.index === 1 ? 80 : 65}
          alt=''
        />
      </div>
      <div className='mt-2 inline-flex justify-center font-bold rounded-md bg-gray-100 text-sm text-gray-800'>{props.person.name}</div>
      <div className='mt-2 relative flex justify-center items-center'>
        <div className='absolute -top-1 -left-2 z-10'>
          <Image alt='tree-icon' width='30' height='30' src='/badges/leaderboardtree.png' />
        </div>
        <span className='inline-flex justify-center px-2 font-bold rounded-md bg-gray-100 text-sm text-gray-800'>
          {props.person.treesPlanted}
        </span>
      </div>
      <div className='mt-2 flex justify-center items-center'>
        <div
          style={{ backgroundColor: `${props.person.color}` }}
          className='h-7 w-7 inline-flex justify-center items-center font-bold rounded-full text-sm text-gray-800'
        >
          {props.person.ranking}
        </div>
      </div>
    </div>
  );
}
