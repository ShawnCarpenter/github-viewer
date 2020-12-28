import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, fetchUser, setUserName } from '../../actions/userActions';
import RepoList from '../repos/RepoList';
import UserDetails from './UserDetails';
import UserForm from './UserForm';
import styles from './User.css';

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
    <div className={styles.User} >
      <header>
        <UserForm 
          userName={userName}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </header>
      <div className={styles.Content}>
        <UserDetails />
        <RepoList />
      </div>
      
    </div>
  );
};

export default User;
