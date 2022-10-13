import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { RingProgressSection } from '../../interfaces';
import RingProgress from '../dashboard/RingProgress';

type Props = {
  carbonTarget?: number;
  sections?: RingProgressSection[][];
  totals?: number[];
};

const DashboardCard = ({ carbonTarget, sections, totals }: Props) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='p-6'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
              Dashboard
            </h2>
            <p className='text-base font-medium text-gray-600' id='dashboard-subtitle'>
              Estimated from your DBS purchases this month.
            </p>
          </div>
          <Link href='/dashboard'>
            <ChevronRightIcon className='h-4 w-4 flex-shrink-0 stroke-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer' />
          </Link>
        </div>
        <div className='mt-6 flex justify-around'>
          <div className='flex flex-col'>
            <RingProgress
              label={
                <div className='flex items-center justify-center'>
                  <Link href='/dashboard/set-goal'>
                    <a className='text-sm font-medium mx-auto hover:underline'>{totals[0]} kg</a>
                  </Link>
                </div>
              }
              sections={sections[0]}
            />
            <p className='mx-auto text-sm text-gray-900'>Total Carbon Emitted</p>
          </div>
          <div className='flex flex-col'>
            <RingProgress
              label={
                <div className='flex items-center justify-center'>
                  <Link href='/dashboard/set-goal'>
                    <a className='text-sm font-medium mx-auto hover:underline'>${totals[1]}</a>
                  </Link>
                </div>
              }
              sections={sections[1]}
            />
            <p className='mx-auto text-sm text-gray-900'>Total Cashback Earned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
