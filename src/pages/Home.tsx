import React, { useEffect } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';
import { useState } from 'react';
import { useDebouce } from '../hooks/debounce';

export default function Home() {
  const [search, setSearch] = useState('');
  const debounced = useDebouce(search);
  const [dropdown, setDropdown] = useState(false);
  const { isError, isLoading, isSuccess, data } = useSearchUsersQuery(
    debounced,
    {
      skip: debounced.length < 3,
    },
  );

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 3);
  }, [debounced]);

  return (
    <div className="flex flex-col items-center pt-[20px] mx-auto h-screen w-screen relative">
      {isError && (
        <p className="text-center text-red-500">Server responded with Error</p>
      )}

      <div className="w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px]"
          type="text"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        ></input>
      </div>

      {dropdown && (
        <ul className="max-h-[200px] w-[560px] shadow-md bg-white overflow-y-scroll">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map((user) => (
            <li
              key={user.id}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {user.login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
