import Image from 'next/image';
import { useRouter } from 'next/router';

const actions = [
  {
    name: 'Cashback',
    href: 'dashboard/cashback',
    imageSrc: 'https://img.icons8.com/color/480/000000/get-cash.png',
  },
  {
    name: 'Leaderboard',
    href: 'leaderboard',
    imageSrc: 'https://img.icons8.com/color/480/000000/leaderboard.png',
  },
  {
    name: 'Recommend',
    href: 'quiz',
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
              <div className='text-center hover:cursor-pointer flex flex-col'>
                <div className='flex-shrink-0'>
                  <div className='flow-root'>
                    <div className='mx-auto h-24 w-24'>
                      <Image src={action.imageSrc} width={100} height={100} alt='action' />
                    </div>
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
