import React from 'react';
import { render, cleanup } from '@testing-library/react';
import User from './User';
import { Provider } from 'react-redux';
import store from '../../store';

describe('User component', () => {
  afterEach(() => cleanup());
  it('renders User', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <User />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
