import { getAuth, getAuthError, getAuthLoading, getAuthUser } from './authSelectors';

describe('auth selectors', () => {
  it('selects auth state', () => {
    const state = {
      auth: {
        user: {name: 'Jenna'},
      }
    };

    const authState = getAuth(state);

    expect(authState).toEqual({
      user: {name: 'Jenna'},
    });
  });

  it('selects errors from state', () => {
    const state = {
      auth: {
        error: 'Invalid password'
      }
    };

    const error = getAuthError(state);
    
    expect(error).toEqual('Invalid password');
  });

  it('selects loading state', () => {
    const state = {
      auth: {
        loading: true
      }
    };

    const loading = getAuthLoading(state);
    
    expect(loading).toEqual(true);
  });

  it('selects user from state', () => {
    const state = {
      auth: {
        user: {
          _id: '12345',
          email: 'jenna@test.com'
        }
      }
    };
    const user = getAuthUser(state);

    expect(user).toEqual({
      _id: '12345',
      email: 'jenna@test.com'
    });
  });
});