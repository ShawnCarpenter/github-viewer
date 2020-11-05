import React from 'react';
import { useSelector } from 'react-redux';
import Repo from './Repo';

const RepoList = () => {
  const repos = useSelector(state => state.repos);
  const repoItems = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));
  return (
    <ol>
      {repoItems}
    </ol>
  );
};

export default RepoList;
