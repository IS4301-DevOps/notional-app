import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className='w-full max-w-lg lg:max-w-xs'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
        <input
          id='search'
          name='search'
          className='block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
          placeholder='Search'
          type='search'
        />
      </div>
    </div>
  );
};

export default SearchBar;
