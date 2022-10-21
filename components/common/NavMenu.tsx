import { XMarkIcon } from "@heroicons/react/24/outline"
import { Popover, Transition } from '@headlessui/react'
import Link from "next/link"
import { Fragment } from "react"
import Logo from "./Logo"
import Image from "next/image"
import { User } from "@prisma/client"

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Dashboard', href: '/dashboard'},
    { name: 'Leaderboard', href: '/leaderboard'},
    { name: 'Rewards', href: '/rewards'},
    { name: 'Recommendations', href: '/recommend'},
];

interface Props {
    user: User
}

const NavMenu = ({ user }: Props) => {
    return (
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
                                <div className='mt-3 space-y-1 px-2 hover:cursor-pointer'>
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
                                        <Image className='rounded-full' src={user.imageUrl} alt='' height={50} width={50} />
                                    </div>
                                    <div className='ml-3 min-w-0 flex-1'>
                                        <div className='truncate text-base font-medium text-gray-800'>{user.name}</div>
                                        <div className='truncate text-sm font-medium text-gray-500'>{user.email}</div>
                                    </div>
                                </div>
                                <div className='mt-3 space-y-1 px-2'>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition.Child>
            </div>
        </Transition.Root>
    )
}

export default NavMenu;