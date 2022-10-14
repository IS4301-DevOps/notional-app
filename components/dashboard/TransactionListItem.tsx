import { Transaction } from '@prisma/client';
import { CatColorsTailwind, CategoryLabel } from '../../interfaces/enums';
import classNames from '../../utils/classNames';

type Props = {
  item: Transaction;
  value: 'cashback' | 'carbon';
};

const TransactionListItem = ({ item, value }: Props) => {
  let text: string;

  if (value == 'carbon') {
    text = `${item[value].toString()} kg`;
  } else {
    text = `$${Number(item[value]).toFixed(2)}`;
  }

  return (
    <li className='flex py-4'>
      <span
        className={classNames(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          `text-${CatColorsTailwind[item.category]}-800`,
          `bg-${CatColorsTailwind[item.category]}-100`,
        )}
      >
        {CategoryLabel[item.category]}
      </span>
      <div className='flex justify-between w-full ml-3'>
        <p className='text-sm font-medium text-gray-900'>{item.vendor}</p>
        <p className='text-sm text-gray-500'>{text}</p>
      </div>
    </li>
  );
};

export default TransactionListItem;
