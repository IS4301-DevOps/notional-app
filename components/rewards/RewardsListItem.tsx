import Image from 'next/image';
import { Reward } from '../../interfaces';

type Props = {
  item: Reward;
};

const RewardsListItem = ({ item }: Props) => {
  return (
    <li className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-left shadow'>
      <div className='flex flex-1 flex-col p-4'>
        <Image className='mx-auto flex-shrink-0' src={item.logo} alt='company-logo' width={100} height={100} />
        <h3 className='mt-6 text-sm font-medium text-gray-900'>{item.name}</h3>
        <dl className='mt-1 flex flex-grow flex-col justify-between'>
          <dt className='sr-only'>Company</dt>
          <dd className='text-sm text-gray-500'>{item.company}</dd>
          <dt className='sr-only'>Points</dt>
          <dd className='mt-3'>
            <span className='py-1 text-xs font-medium'>{item.points} points</span>
          </dd>
        </dl>
      </div>
    </li>
  );
};

export default RewardsListItem;
