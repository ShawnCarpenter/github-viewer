import { SET_LOADING,
  SET_USERNAME,
  SET_USER, 
  SET_REPOS } from '../actions/userActions';

const initialState = {
  userName: '',
  profile: {},
  repos:[],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    case SET_USER:
      return { ...state, profile: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}
