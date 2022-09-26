import { Text } from '@mantine/core';
import React from 'react';
import RingProgress from '../dashboard/RingProgress';

const sections = [
  { value: 40, color: 'cyan', tooltip: 'Fashion – 40 kg' },
  { value: 25, color: 'orange', tooltip: 'Food – 25 kg' },
  { value: 15, color: 'grape', tooltip: 'Gas – 15 kg' },
]

const DashboardCard = () => {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='p-6'>
        <h2 className='text-base font-medium text-gray-900' id='dashboard-title'>
          Dashboard
        </h2>
        <p className='text-base font-medium text-gray-600' id='dashboard-subtitle'>
          Estimated from your DBS purchases
        </p>
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
        <div className='mt-6'>
          <a
            href='#'
            className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
