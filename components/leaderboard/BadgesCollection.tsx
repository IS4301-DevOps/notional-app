import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function BadgesCollection(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='rounded shadow-lg mt-3 bg-[#efe6e6] pt-4 pl-4 pr-4 pb-4'>
      {/* modal */}
      {showModal ? (
        <>
          <div className='mr-5 ml-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-2xl font-semibold'>
                    Offset 10kg of CO<sub>2</sub>
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>×</span>
                  </button>
                </div>
                {/*body*/}
                <br />
                <Image alt='me' width='100' height='100' src={`/badges/carbon_10.svg`} />
                <div className='relative p-6 pt-0 flex-auto'>
                  <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                    Awesome job! You&apos;ve managed to offset{' '}
                    <strong>
                      10kg worth of CO<sub>2</sub>
                    </strong>{' '}
                    and played a huge role in reducing the carbon footprint for the earth!
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}

      <div className='grid grid-cols-3 gap-y-4 text-center'>
        {/* row one */}

        {props.list.map((badge, idx) => (
          <div key={idx}>
            <Image
              onClick={idx == 0 ? () => setShowModal(true) : undefined}
              alt='me'
              width='100'
              height='100'
              src={`/badges/${badge}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
