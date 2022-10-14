import { BreakdownByUser } from '../../interfaces';
import _ from 'lodash';
import classNames from '../../utils/classNames';
import { CatColorsTailwind, CategoryLabel } from '../../interfaces/enums';

type Props = {
  item: BreakdownByUser;
  value: 'cashback' | 'carbon';
};

const BreakdownListItem = ({ item, value }: Props) => {
  return (
    <li className='flex py-4'>
      <span
        className={classNames(
          ' min-w-max inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800',
          `text-${CatColorsTailwind[item.category]}-800`,
          `bg-${CatColorsTailwind[item.category]}-100`,
        )}
      >
        {CategoryLabel[item.category]}
      </span>
      <div className='flex justify-between w-full ml-3'>
        <p className='text-sm font-medium text-gray-900'>{_.startCase(_.toLower(item.category))}</p>
        <p className='text-sm text-gray-500'>
          {value === 'cashback' && '$'}
          {item._sum[value]} {value === 'carbon' && 'kg'}
        </p>
      </div>
    </li>
  );
};

export default BreakdownListItem;
