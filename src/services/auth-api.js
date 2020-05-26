export const postSignUp = (newUser) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role
    }),
    credentials: 'include'
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const postLogIn = (email, password) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    }),
    credentials: 'include'
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getVerify = () => {
  return fetch(`${process.env.API_URL}/api/v1/auth/verify`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getLogOut = () => {
  return fetch(`${process.env.API_URL}/api/v1/auth/logout`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json());
};

export const patchFavorite = id => {
  return fetch(`${process.env.API_URL}/api/v1/auth/favorites/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then(res => res.json());
}