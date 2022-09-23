import { BellIcon } from '@heroicons/react/24/outline';
import React from 'react';

const NotificationButton = () => {
  return (
    <button
      type='button'
      className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
    >
      <span className='sr-only'>View notifications</span>
      <BellIcon className='h-6 w-6' aria-hidden='true' />
    </button>
  );
};

export default NotificationButton;
