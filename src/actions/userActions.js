import { getUser } from '../services/gitHubApi';

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_LOGIN = 'SET_LOGIN';
export const setLogin = login => ({
  type: SET_LOGIN,
  payload: login
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const fetchUser = userName => dispatch => {
  getUser(userName)
    .then(user => {
      dispatch(setUser(user));
    })
    .finally(() => dispatch(setLoading(false)));
};