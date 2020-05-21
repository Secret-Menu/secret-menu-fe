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
}

export const postLogIn = (email, password) => {
  return fetch('http://localhost:7890/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
}

export const getLogOut = () => {
  return fetch('http://localhost:7890/api/v1/auth/logout', {
    method: 'GET'
  })
}

export const getVerify = () => {
  return fetch('http://localhost:7890/api/v1/auth/verify', {
    method: 'GET'
  })
}