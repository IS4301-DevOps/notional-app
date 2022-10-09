import Link from 'next/link';
import { Tab } from '../../interfaces';
import classNames from '../../utils/classNames';

type Props = {
  tabs?: Tab[];
};

const Tabs = ({ tabs = [] }: Props) => {
  return (
    <div className='block'>
      <nav className='flex space-x-2 md:space-x-4' aria-label='Tabs'>
        {tabs.map(tab => (
          <Link key={tab.name} href={tab.href}>
            <a
              className={classNames(
                tab.current ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:text-gray-800',
                'px-3 py-2 font-medium text-sm rounded-md',
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
