import { Transaction } from '@prisma/client';
import { Key } from 'react';

type Props = {
  key: Key;
  item: Transaction;
  value: 'cashback' | 'carbon';
};

const TransactionListItem = ({ key, item, value }: Props) => {
  return (
    <li key={key} className='flex py-4'>
      <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>
        {item.category}
      </span>
      <div className='flex justify-between w-full ml-3'>
        <p className='text-sm font-medium text-gray-900'>{item.vendor}</p>
        <p className='text-sm text-gray-500'>{item[value].toString()} kg</p>
      </div>
    </li>
  );
};

export default TransactionListItem;
