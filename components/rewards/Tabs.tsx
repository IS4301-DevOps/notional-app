import { useRouter } from 'next/router';
import { Tab } from '../../interfaces';
import classNames from '../../utils/classNames';

type Props = {
  tabs?: Tab[];
};

const Tabs = ({ tabs = [] }: Props) => {
  const { pathname } = useRouter();
  return (
    <div className='block'>
      <nav className='isolate flex divide-x divide-gray-200 rounded-lg shadow' aria-label='Tabs'>
        {tabs.map((tab, tabIdx) => {
          const isCurrent = tab.href === pathname;
          return (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                isCurrent ? 'text-primary' : 'text-secondary hover:text-primary',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-semibold text-center hover:bg-gray-50 focus:z-10',
              )}
              aria-current={isCurrent ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden='true'
                className={classNames(isCurrent ? 'bg-primary' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5')}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
};
export default Tabs;
