export const postSignUp = (firstName, lastName, email, password, role) => {
  return fetch('http://localhost:7890/api/v1/auth/signup', {
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
  });
}