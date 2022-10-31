import React, { useMemo, Dispatch, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import classes from '../../styles/components/layout/InfoModal.module.css';
import { XMarkIcon } from '@heroicons/react/24/outline';
import LandingInfoModal from './LandingInfoModal';
import DashboardInfoModal from './DashboardInfoModal';
import RecommendationInfoModal from './RecommendationInfoModal';
import LeaderboardInfoModal from "./LeaderboardInfoModal";

interface InfoModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const getModalContent = (pathName: string) => {
  console.log('Pathname: ' + pathName);
  switch (pathName) {
    case '/':
      return <LandingInfoModal/>
      break;
    case '/dashboard':
      return <DashboardInfoModal/>
      break;
    case '/recommend':
      return <RecommendationInfoModal/>
      break;
    case '/survey':
      return <RecommendationInfoModal/>
      break;
    case '/leaderboard':
      return <LeaderboardInfoModal/>
      break;
    case '/rewards':
      return <LeaderboardInfoModal/>
      break;
    default:
      return <LandingInfoModal/>
      break;
  }
};

const getModalTitle = (pathName: string) => {

  switch (pathName) {
    case "/":
      return "What is ESG?" 
      break;
    case '/dashboard':
      return "Dashboard";
      break;
    case '/recommend':
      return "Recommendation";
      break;
    case '/survey':
      return "Recommendation";
      break;
    case '/leaderboard':
      return "Leaderboard";
      break;
    case '/rewards':
      return "Rewards";
      break;
    default:
      break;
  }
}

const InfoModal = ({ isOpen, setIsOpen }: InfoModalProps) => {
  const modalContent = useMemo(() => getModalContent(window.location.pathname), []);
  const modalTitle = useMemo(() => getModalTitle(window.location.pathname),[]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center  text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {/* Start of dialog */}
              <Dialog.Panel
                className={`${classes['dialog-panel']} w-full max-w-md transform overflow-hidden rounded-2xl bg-white   text-left align-middle shadow-xl transition-all`}
              >
                <header className={`${classes['dialog-title']}`}>
                  {/* Close Button */}
                  <button type='button' onClick={closeModal} className={classes['close-button']}>
                    <XMarkIcon height={'26'} />
                  </button>
                  <Dialog.Title as='h3' className={`text-lg font-bold leading-6 text-gray-900`}>
                   {modalTitle} 
                  </Dialog.Title>
                </header>
                <div className={classes['modal-body']}>
                  {modalContent}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InfoModal;
