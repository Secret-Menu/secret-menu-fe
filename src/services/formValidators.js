export const validateSignUp = (name, email, password) => {
  const errors = [];

  if(name.length === 0) {
    errors.push('Please enter a name...');
  }

  if(email.length < 5) {
    errors.push('Email is too short...');
  }
  if(email.split('').filter(x => x === '@').length !== 1) {
    errors.push('Missing @ symbol...');
  }
  if(email.indexOf('.') === -1) {
    errors.push('Missing a dot...');
  }

  if(password.length < 4) {
    errors.push('Password should be at least 4 characters long');
  }

  return errors;
};
