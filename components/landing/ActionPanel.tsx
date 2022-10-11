import { useRouter } from 'next/router'

const actions = [
  {
    name: 'Cashback',
    href: 'dashboard/cashback',
    imageSrc: 'https://img.icons8.com/color/480/000000/get-cash.png',
  },
  {
    name: 'Transactions',
    href: 'transactions',
    imageSrc: 'https://img.icons8.com/color/480/000000/transaction.png',
  },
  {
    name: 'Recommend',
    href: '#',
    imageSrc: 'https://img.icons8.com/color/480/000000/good-quality--v1.png',
  },
];

const ActionPanel = () => {
  const router = useRouter();

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='mx-auto max-w-7xl py-12 sm:px-2 sm:py-32 lg:px-4'>
        <div className='mx-auto grid max-w-2xl grid-cols-3 gap-y-10 gap-x-8 px-4 lg:max-w-none'>
          {actions.map(action => (
            <div key={action.name} onClick={() => router.push(`/${action.href}`)}>
              <div className='text-center hover:cursor-pointer sm:flex sm:text-left lg:block lg:text-center'>
                <div className='sm:flex-shrink-0'>
                  <div className='flow-root'>
                    <img className='mx-auto h-24 w-28' src={action.imageSrc} />
                  </div>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0'>
                  <h3 className='text-base font-semibold text-gray-900'>{action.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ActionPanel;
