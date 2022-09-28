import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import RingProgress from '../dashboard/RingProgress';

const sections = [
  { value: 40, color: 'cyan', tooltip: 'Fashion – 40 kg' },
  { value: 25, color: 'orange', tooltip: 'Food – 25 kg' },
  { value: 15, color: 'grape', tooltip: 'Gas – 15 kg' },
];

const DashboardCard = () => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='p-6'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
              Dashboard
            </h2>
            <p className='text-base font-medium text-gray-600' id='dashboard-subtitle'>
              Estimated from your DBS purchases
            </p>
          </div>
          <Link href='/dashboard'>
            <ChevronRightIcon className='h-4 w-4 flex-shrink-0 stroke-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer' />
          </Link>
        </div>
        <div className='mt-6 flow-root'>
          <RingProgress
            label={
              <Text size='xs' align='center' px='xs' sx={{ pointerEvents: 'none' }}>
                300kg
              </Text>
            }
            sections={sections}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
