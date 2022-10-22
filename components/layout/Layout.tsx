import { Menu, Popover, Transition } from '@headlessui/react';
import { ArrowLeftIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode, useState } from 'react';
import Head from 'next/head';

import Footer from './Footer';
import NotificationButton from '../landing/NotificationButton';
import liveBetterLogo from '../../public/livebetter.svg';
import Image from 'next/image';
import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import Notifications from '../common/Notifications';
import NavMenu from '../common/NavMenu';
import InfoModalButton from './InfoModalButton';
import InfoModal from './InfoModal';
import classes from "../../styles/components/layout/Layout.module.css";

type Props = {
  title?: string;
  heading?: string;
  user?: User;
  children?: ReactNode;
};

const Layout = ({ title = 'Default title', heading = 'Default heading', user, children }: Props) => {
  const router = useRouter();
  const [openNoti, setOpenNoti] = useState(false);
  const [infoModalOpened, setInfoModalOpened] = useState<boolean>(false);

  const onOpenNotiClicked = () => setOpenNoti(!openNoti);

  const onBackClicked = () => {
    if (router.pathname === '/') {
      return;
    }
    router.back();
  };

  const handleRouteToHome = () => router.replace('/');

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <Popover as='header' className='bg-white shadow fixed w-screen top-0 z-10'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='relative flex flex-wrap items-center justify-center py-5 lg:justify-between'>
                  {/* Back Button */}
                  <div className='absolute left-0 flex-shrink-0 lg:static'>
                    <button type='button' onClick={onBackClicked} className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                      <ArrowLeftIcon className='h-5 w-5' />
                    </button>
                  </div>

                  {/* Middle section on desktop */}
                  <div className='hidden px-12 lg:flex lg:items-center lg:px-0 text-center font-medium'>
                    <div className='relative mx-auto w-full max-w-xs lg:max-w-md'>
                      {/* <div className='absolute left-1/2 -ml-20 -top-0'>
                            <Image src={liveBetterLogo} height={32} width={32} alt='livebetter-logo' />
                          </div> */}
                      <span>{heading}</span>
                    </div>
                  </div>

                  {/* Right section on desktop */}
                  <div className='hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='relative ml-4 flex-shrink-0'>
                      <div>
                        <Menu.Button className='flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100'>
                          <span className='sr-only'>Open user menu</span>
                          {/* <Image className='h-8 w-8 rounded-full' src={user.imageUrl} alt='' /> */}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                      </Transition>
                    </Menu>
                  </div>

                  <div className='w-full py-5 lg:border-t lg:border-white lg:border-opacity-20'>
                    <div className='lg:grid lg:grid-cols-3 lg:items-center lg:gap-8'></div>
                  </div>

                  <div className='absolute  flex-shrink-0 text-center font-medium lg:hidden'>
                    <div className='relative mx-auto w-full max-w-xs lg:max-w-md'>
                      <div className='absolute left-1/2 -ml-20'>
                        <Image src={liveBetterLogo} height={32} width={32} alt='livebetter-logo' />
                      </div>
                      <p className='text-lg hover:cursor-pointer font-semibold pt-1' onClick={handleRouteToHome}>
                        {heading}
                      </p>
                    </div>
                  </div>
                  {/* Menu button */}
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'>
                    {/* Modal Button */}
                    <InfoModalButton 
                      onClickHandler={setInfoModalOpened}
                    />
                    {/* Notification Button */}
                    <NotificationButton onOpenNotiClicked={onOpenNotiClicked} />
                    {/* Mobile menu button */}
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-500 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <Notifications openNoti={openNoti} setOpenNoti={setOpenNoti} />
              <InfoModal
                isOpen={infoModalOpened}
                setIsOpen={setInfoModalOpened}
              />
              <NavMenu user={user} />
            </>
          )}
        </Popover>
      </header>
      <main className={`${classes['landing-main']} mt-8 pb-8`}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
