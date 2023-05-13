import React from 'react';
import { IRepo } from '../models/models';

export default function RepoCard({ repo }: { repo: IRepo }) {
  return (
    <a href={repo.html_url} target="_blank">
      <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p>{repo.language}</p>
        {repo.description && <p>{repo.description}</p>}
      </div>
    </a>
  );
}
