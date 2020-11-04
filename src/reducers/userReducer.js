import { SET_LOADING, SET_LOGIN, SET_USER } from '../actions/userActions';

const initialState = {
  id: '',
  login: '',
  name: '',
  followers: 0,
  following: 0,
  image: '',
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_LOGIN:
      return { ...state, login: action.payload };
    default:
      return state;
  }
}
