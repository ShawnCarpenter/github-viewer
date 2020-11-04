import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setLogin } from '../../actions/userActions';

const User = () => {
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  
  const handleChange = ({ target }) => {
    dispatch(setLogin(target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchUser(login));

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="login"
          onChange={handleChange}
          value={login}/>
        <button>Get User Info</button>
      </form>
    </div>
  );
};

export default User;
