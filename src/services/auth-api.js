export const postSignUp = (firstName, lastName, email, password, role) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      role
    })
  })
  .then(res => Promise.all([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw json;
    return json;
  })
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
    })
  })
  .then(res => Promise.all([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw json;
    return json;
  })
};

export const getVerify = () => {
  return fetch(`${process.env.API_URL}/api/v1/auth/verify`, {
    method: 'GET'
  })
  .then(res => Promise.all([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw json;
    return json;
  })
}