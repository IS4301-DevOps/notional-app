import Image from 'next/image';
import { CompanyRating } from '../../interfaces';

type Props = {
  item: CompanyRating;
};

const RatingListItem = ({ item }: Props) => {
  return (
    <li className='flex py-4 items-center'>
      <Image src={item.logo} height={30} width={30} alt='company-logo' />
      <div className='flex justify-between w-full ml-3'>
        <p className='text-sm font-medium text-gray-900'>{item.company}</p>
        <p className='text-sm text-gray-500'>{item.rating.toFixed(1)}</p>
      </div>
    </li>
  );
};

export default RatingListItem;
