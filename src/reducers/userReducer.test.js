import { setLoading, setUser }  from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the SET_USER function', () => {
    const state = {
      id: '',
      login: '',
      name: '',
      followers: 0,
      following: 0,
      image: '',
      loading: true
    };

    const action = setUser({
      id: '1234',
      login: 'ShawnCarpenter',
      name: 'Shawn Carpenter',
      followers: 0,
      following: 0,
      image: 'http://image.com/pic.jpg',
      loading:true,
    

    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      id: '1234',
      login: 'ShawnCarpenter',
      name: 'Shawn Carpenter',
      followers: 0,
      following: 0,
      image: 'http://image.com/pic.jpg',
      loading:true
    });
  });

  it('handle the SET_LOADING', () => {
    const state = {
      id: '',
      login: '',
      name: '',
      followers: 0,
      following: 0,
      image: '',
      loading: true
    };

    const action = setLoading(false);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      id: '',
      login: '',
      name: '',
      followers: 0,
      following: 0,
      image: '',
      loading: false
    });
  });
});
