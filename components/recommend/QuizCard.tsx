import { useRouter } from 'next/router';
import React from 'react';

const QuizCard = () => {
  const router = useRouter();
  
  const handleRouteToQuiz = () => router.push('/quiz');

  return (
    <div className='rounded-lg bg-orange-100 px-4 py-2 sm:px-6 text-center space-y-2'>
      <h3 className='text-sm font-semibold leading-6 text-gray-900'>Want more personalised recommendations?</h3>
      <button
        type='button'
        onClick={handleRouteToQuiz}
        className='inline-flex items-center rounded-md border border-green-600 bg-white px-3 py-2 text-sm font-semibold leading-4 text-green-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
      >
        Take Recommendation Quiz
      </button>
    </div>
  );
};

export default QuizCard;
