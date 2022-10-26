import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';

export const useDebounceSearch = () => {
  const [search, setSearch] = useState('');

  const handleSearchChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };

  const debouncedSearch = useMemo(() => _.debounce(handleSearchChanged, 300), []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return { search, debouncedSearch };
};
