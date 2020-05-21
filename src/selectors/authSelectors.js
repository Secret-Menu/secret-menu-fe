export const getAuth = state => state.auth;
export const getAuthError = state => getAuth(state).error;
export const getAuthLoading = state => getAuth(state).loading;
export const getAuthUser = state => getAuth(state).user;
