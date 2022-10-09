import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface Props {
    openNoti: boolean;
    setOpenNoti: Dispatch<SetStateAction<boolean>>
}

const notiData = [
    {
        id: 1,
        message: 'Some first notification here',
        date: '13 Oct 2022 15:21'
    },
    {
        id: 2,
        message: 'Some second notification here',
        date: '07 Oct 2022 20:10'
    },
    {
        id: 3,
        message: 'Some very long notifications here like seriously super very long, maybe some grandmother story or some notifications that the banks actually want to tell the user a story for 10 years idk, just something very long.',
        date: '01 Oct 2022 11:41'
    },
]

const Notifications = ({ openNoti, setOpenNoti }: Props) => {
    return (
        <Transition.Root show={openNoti} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenNoti}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                            <div className="flex h-full flex-col overflow-y-auto bg-white">
                                <div className="flex items-start justify-between p-6 bg-gray-100">
                                    <Dialog.Title className="text-lg font-bold text-gray-900">Notifications</Dialog.Title>
                                    <button
                                        type="button"
                                        className="flex h-7 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-gray-500"
                                        onClick={() => setOpenNoti(false)}
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>
                                <ul className="flex-1 divide-y divide-gray-200 overflow-hidden">
                                    {notiData.map((data) => (
                                        <li key={data.id}>
                                            <div className="grid inline-flex grid-cols-12 items-center py-4 px-5">
                                                <a className="-m-1 block flex-1 p-1 col-span-11">
                                                    <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                                                    <div className="relative flex min-w-0 flex-1 items-center mr-3">
                                                        <div className="ml-4 text-ellipsis">
                                                            <p className="text-clip text-sm font-medium text-gray-900">{data.message}</p>
                                                            <p className="text-clip text-xs font-thin text-gray-900 pt-5">{data.date}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ChevronRightIcon className="flex h-full w-full col-span-1 h-4 w-4 hover:text-red" aria-hidden="true" />
                                            </div>
                                            <hr className="solid" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Notifications;