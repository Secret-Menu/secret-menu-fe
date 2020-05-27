export const validateSignUp = (newUser) => {
  const errors = [];

  if(newUser.firstName.length === 0) {
    errors.push('Please enter a name...');
  }

  if(newUser.email.length < 5) {
    errors.push('Email is too short...');
  }
  if(newUser.email.split('').filter(x => x === '@').length !== 1) {
    errors.push('Email is Missing an @ symbol...');
  }
  if(newUser.email.indexOf('.') === -1) {
    errors.push('Email is Missing a dot...');
  }

  // if(password.length < 4) {
  //   errors.push('Password should be at least 4 characters long');
  // }
  
  return errors;
};
