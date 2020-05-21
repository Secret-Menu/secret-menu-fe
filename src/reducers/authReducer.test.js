import { SIGNUP } from "../actions/authActions";
import reducer from './authReducer';

describe('auth reducer', () => {
  it('handles the SIGNUP action', () => {
    const state = {
      user: null
    }

    const action = {
      type: SIGNUP,
      payload: {
        _id: '12345',
        firstName: 'Jenna',
        lastName: 'Goldman',
        email: 'jenna@test.com',
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        _id: '12345',
        firstName: 'Jenna',
        lastName: 'Goldman',
        email: 'jenna@test.com'
      }
    });
  });
});