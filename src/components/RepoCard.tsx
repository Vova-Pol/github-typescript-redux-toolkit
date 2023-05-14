import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourites, removeFavourites } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourites = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    addFavourites(repo.html_url);
    setIsFav(!isFav);
  };

  const removeFromFavourites = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    removeFavourites(repo.html_url);
    setIsFav(!isFav);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p>{repo.language}</p>
        {repo.description && <p>{repo.description}</p>}{' '}
      </a>

      {isFav ? (
        <button
          className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          onClick={removeFromFavourites}
        >
          Remove
        </button>
      ) : (
        <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFavourites}
        >
          Add
        </button>
      )}
    </div>
  );
}
