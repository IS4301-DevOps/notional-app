import { Transaction } from '@prisma/client';
import TransactionListItem from './TransactionListItem';

type Props = {
  data?: Transaction[];
  value: 'cashback' | 'carbon';
};

const TransactionList = ({ data = [], value }: Props) => {
  return (
    <ul role='list' className='divide-y divide-gray-200'>
      {data.map(item => (
        <TransactionListItem key={item.id} item={item} value={value} />
      ))}
    </ul>
  );
};

export default TransactionList;
