import { setLoading, setUser }  from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the SET_USER function', () => {
    const state = {
      userName: '',
      profile:{},
      loading: true
    };

    const action = setUser({
      id: '1234',
      userName: 'ShawnCarpenter',
      name: 'Shawn Carpenter',
      followers: 0,
      following: 0,
      image: 'http://image.com/pic.jpg'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userName:'',
      profile: {
        id: '1234',
        userName: 'ShawnCarpenter',
        name: 'Shawn Carpenter',
        followers: 0,
        following: 0,
        image: 'http://image.com/pic.jpg'
      },
      loading:true
    });
  });

  it('handle the SET_LOADING', () => {
    const state = {
      userName: '',
      profile:{},
      loading: true
    };

    const action = setLoading(false);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userName:'',
      profile:{},
      loading: false
    });
  });
});
