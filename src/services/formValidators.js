export const validateSignUp = (newUser) => {
  const errors = [];

  if(newUser.firstName.length === 0) {
    errors.push('First Name Missing!');
  }
  if(newUser.lastName.length === 0) {
    errors.push('Last Name Missing!');
  }
  if(newUser.email && newUser.email.length < 5) {
    errors.push('Email is too short!');
  }
  if(newUser.email && newUser.email
    .split('')
    .filter(x => x === '@')
    .length !== 1) {
    errors.push('Email is Missing an @ symbol!');
  }
  if(newUser.email && newUser.email.indexOf('.') === -1) {
    errors.push('Email is Missing a dot');
  }
  if(!newUser.email) {
    errors.push('Email is Missing!');
  }
  if(!newUser.password) {
    errors.push('Password Missing!');
  }
  if(!newUser && newUser.password.length < 4) {
    errors.push('Password should be at least 4 characters long');
  }
  return errors;
};
