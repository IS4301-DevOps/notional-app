import React, { Dispatch, SetStateAction } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface InfoModalProps {
  onClickHandler: Dispatch<SetStateAction<boolean>>;
}

const InfoModalButton = ({
  onClickHandler
}: InfoModalProps) => {

  const openModal = () => {
    onClickHandler(true);
  }
  return (
    <button
      type='button'
      onClick={openModal}
      className='ml-auto flex-shrink-0 rounded-full bg-white p-2 text-gray-400 hover:text-gray-500'  
    >
      <span className='sr-only'>View Information</span>
      <QuestionMarkCircleIcon className='h-6 w-6' aria-hidden='true'/> 
    </button>
  )
}

export default InfoModalButton
