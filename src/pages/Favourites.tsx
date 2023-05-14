import React from 'react';
import { useAppSelector } from '../hooks/redux';

export default function Favourites() {
  const { favourites } = useAppSelector((state) => state.github);

  if (!favourites.length) {
    return <p>No items yet</p>;
  }

  return (
    <div className="flex flex-col items-center pt-[20px] mx-auto h-screen w-screen relative">
      <ul className="list-none">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
