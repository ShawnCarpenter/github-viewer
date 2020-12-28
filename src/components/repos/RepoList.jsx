import React from 'react';
import { useSelector } from 'react-redux';
import Repo from './Repo';

const RepoList = () => {
  const repos = useSelector(state => state.repos);
  const repoItems = repos.map(repo => (
    <a key={repo.id}
      href={repo.url} rel="noreferrer" target="_blank">
      <li>
        <Repo {...repo} />
      </li>
    </a>
  ));
  return (
    <ul>
      {repoItems}
    </ul>
  );
};

export default RepoList;
