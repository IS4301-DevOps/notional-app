import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
    openNoti: boolean;
    setOpenNoti: Dispatch<SetStateAction<boolean>>
}

const notiData = [
    {
        id: 1,
        message: 'Not sure what to put as notifications here though',
        date: '13 Oct 2022 15:21'
    },
    {
        id: 2,
        message: 'I should probably put some proper info here instead of all these texts',
        date: '07 Oct 2022 20:10'
    },
    {
        id: 3,
        message: 'Some very long notifications here like seriously super very long, maybe some grandmother story or some notifications that the banks actually want to tell the user a story for 10 years idk, just something very long. This is still not long enough so lets make it longer and see how it goes lets gooooooooooooo',
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
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
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
                                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                        <div className="p-6 bg-gray-100">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-bold text-gray-900">Notifications</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md text-gray-400 hover:text-gray-500  focus:ring-gray-500"
                                                        onClick={() => setOpenNoti(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-hidden">
                                            {notiData.map((data) => (
                                                <li key={data.id}>
                                                    <div className="group relative flex items-center py-4 px-5">
                                                        <div className="-m-1 block flex-1 p-1">
                                                            <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                                                            <div className="relative flex min-w-0 flex-1 items-center">
                                                                <div className="ml-4">
                                                                    <p className="text-ellipsis text-sm font-medium text-gray-900">{data.message}</p>
                                                                    <p className="text-clip text-xs font-thin text-gray-900 pt-5">{data.date}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Notifications;