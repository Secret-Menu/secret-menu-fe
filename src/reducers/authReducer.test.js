import { SET_USER } from "../actions/authActions";
import reducer from './authReducer';

describe('auth reducer', () => {
  it('handles the SIGNUP action', () => {
    const state = {
      user: null
    }

    const action = {
      type: SET_USER,
      payload: {
        _id: '12345',
        firstName: 'Jenna',
        lastName: 'Goldman',
        email: 'jenna@test.com',
        role: 'User'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: {
        _id: '12345',
        firstName: 'Jenna',
        lastName: 'Goldman',
        email: 'jenna@test.com',
        role: 'User'
      }
    });
  });
});
