import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  cardText?: string;
};

const GoalCard = ({ cardText = 'Default card text' }: Props) => {
  const router = useRouter();

  const handleRouteToGoal = () => router.push('/goal');

  return (
    <div className='rounded-lg bg-orange-100 px-4 py-2 sm:px-6 text-center space-y-2'>
      <h3 className='text-sm font-semibold leading-6 text-gray-900'>{cardText}</h3>
      <button
        type='button'
        onClick={handleRouteToGoal}
        className='inline-flex items-center rounded-md border border-green-600 bg-white px-3 py-2 text-sm font-semibold leading-4 text-green-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
      >
        Track Goal Progress
      </button>
    </div>
  );
};

export default GoalCard;
