import { getRepos, getUser } from '../services/gitHubApi';

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUserName = userName => ({
  type: SET_USERNAME,
  payload: userName
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

export const fetchRepos = userName => dispatch => {
  getRepos(userName)
    .then(repos => {
      dispatch(setRepos(repos));
    })
    .finally(() => dispatch(setLoading(false)));
};
