import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('matches a SignUp snapshot', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  })
})