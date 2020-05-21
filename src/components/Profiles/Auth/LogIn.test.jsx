import React from 'react';
import { shallow } from 'enzyme';
import LogIn from './LogIn';

describe('LogIn', () => {
  it('matches a LogIn snapshot', () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper).toMatchSnapshot();
  })
})