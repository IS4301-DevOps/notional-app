import { Menu, Popover, Transition } from '@headlessui/react';
import { ArrowLeftIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Footer from './Footer';
import Logo from '../common/Logo';
import NotificationButton from '../landing/NotificationButton';
import liveBetterLogo from '../../public/livebetter.svg';
import classNames from '../../utils/classNames';
import Image from 'next/image';
import { User } from '@prisma/client';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Dashboard', href: '/dashboard', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

type Props = {
  title?: string;
  heading?: string;
  user?: User;
  children?: ReactNode;
};

const Layout = ({ title = 'Default title', heading = 'Default heading', user, children }: Props) => {
  const router = useRouter();

  const onBackClicked = () => {
    if (router.pathname === '/') {
      return;
    }
    router.back();
  };

  return (
    <div className='bg-gray-50 min-h-full'>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <Popover as='header' className='bg-white shadow mb-32'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='relative flex flex-wrap items-center justify-center py-5 lg:justify-between'>
                  {/* Back Button */}
                  <div className='absolute left-0 flex-shrink-0 lg:static'>
                    <button type='button' onClick={onBackClicked}>
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
                    <NotificationButton />

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
                        <Menu.Items className='absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map(item => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className='w-full py-5 lg:border-t lg:border-white lg:border-opacity-20'>
                    <div className='lg:grid lg:grid-cols-3 lg:items-center lg:gap-8'>
                      {/* Left nav */}
                      {/* <div className='hidden lg:col-span-2 lg:block'>
                        <nav className='flex space-x-4'>
                          {navigation.map(item => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? 'text-white' : 'text-gray-100',
                                'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div> */}
                    </div>
                  </div>

                  <div className='absolute flex-shrink-0 text-center font-medium lg:hidden'>
                    <div className='relative mx-auto w-full max-w-xs lg:max-w-md'>
                      {/* <div className='absolute left-1/2 -ml-20 -top-0'>
                            <Image src={liveBetterLogo} height={32} width={32} alt='livebetter-logo' />
                          </div> */}
                      <span>{heading}</span>
                    </div>
                  </div>
                  {/* Menu button */}
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'>
                    {/* Notification Button */}
                    <NotificationButton />
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

              <Transition.Root as={Fragment}>
                <div className='lg:hidden'>
                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Overlay className='fixed inset-0 z-20 bg-black bg-opacity-25' />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Popover.Panel
                      focus
                      className='absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition'
                    >
                      <div className='divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='pt-3 pb-2'>
                          <div className='flex items-center justify-between px-4'>
                            <Logo />
                            <div className='-mr-2'>
                              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>
                                <span className='sr-only'>Close menu</span>
                                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className='mt-3 space-y-1 px-2'>
                            {navigation.map(item => (
                              <Link key={item.name} href={item.href}>
                                <p className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800'>
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className='pt-4 pb-2'>
                          <div className='flex items-center px-5'>
                            <div className='flex-shrink-0'>
                              <img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
                            </div>
                            <div className='ml-3 min-w-0 flex-1'>
                              <div className='truncate text-base font-medium text-gray-800'>{user.name}</div>
                              <div className='truncate text-sm font-medium text-gray-500'>{user.email}</div>
                            </div>
                            <NotificationButton />
                          </div>
                          <div className='mt-3 space-y-1 px-2'>
                            {userNavigation.map(item => (
                              <Link key={item.name} href={item.href}>
                                <p className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800'>
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
      </header>
      <main className='-mt-24 pb-8'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
