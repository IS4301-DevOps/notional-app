import Link from 'next/link';
import React from 'react';

export default function ESGQuiz() {
  return (
    <Link href='/esg-quiz'>
      <button
        type='button'
        className='inline-flex items-center rounded-md border border-green-600 bg-white px-6 py-3 
        text-base font-medium text-green-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
      >
        Take an ESG Quiz to test your knowledge!
      </button>
    </Link>
  );
}
