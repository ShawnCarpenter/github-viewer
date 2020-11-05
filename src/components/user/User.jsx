import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, fetchUser, setUserName } from '../../actions/userActions';
import RepoList from '../repos/RepoList';
import UserDetails from './UserDetails';
import UserForm from './UserForm';

const User = () => {
  const userName = useSelector(state => state.userName);
  const dispatch = useDispatch();
  
  const handleChange = ({ target }) => {
    dispatch(setUserName(target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchUser(userName));
    dispatch(fetchRepos(userName));
  };
  return (
    <>
      <UserForm 
        userName={userName}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <UserDetails />
      <RepoList />
    </>
  );
};

export default User;
