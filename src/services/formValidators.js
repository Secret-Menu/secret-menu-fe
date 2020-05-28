export const validateSignUp = (newUser) => {
  const errors = [];

  if(newUser.firstName.length === 0) {
    errors.push('First Name Missing  ⚠️');
  }
  if(newUser.lastName.length === 0) {
    errors.push('Last Name Missing ⚠️');
  }
  if(newUser.email && newUser.email.length < 5) {
    errors.push('Email is too short ⚠️');
  }
  if(newUser.email && newUser.email
    .split('')
    .filter(x => x === '@')
    .length !== 1) {
    errors.push('Email is Missing an @ symbol ⚠️');
  }
  if(newUser.email && newUser.email.indexOf('.') === -1) {
    errors.push('Email is Missing a dot ⚠️');
  }
  if(!newUser.email) {
    errors.push('Missing Email ⚠️');
  }
  if(!newUser.password) {
    errors.push('Password Missing ⚠️');
  }
  if(!newUser && newUser.password.length < 4) {
    errors.push('Password should be at least 4 characters long ⚠️');
  }
  return errors;
};

export const validateBusiness = (newBusiness) => {
  const errors = [];

  if(newBusiness.restaurantName.length === 0) {
    errors.push('Business Name Missing ⚠️');
  }
  if(!newBusiness.address.streetAddress) {
    errors.push('Street Address Invalid ⚠️');
  }
  if(!newBusiness.address.city) {
    errors.push('City Invalid ⚠️');
  }
  if(!newBusiness.address.zipcode) {
    errors.push('Zip Code Invalid ⚠️');
  }
  if(!newBusiness.phoneNumber) {
    errors.push('Phone Number Invalid ⚠️');
  }
  if(!newBusiness.websiteUrl) {
    errors.push('Website Invalid ⚠️');
  }
  if(!newBusiness.email) {
    errors.push('Email Invalid ⚠️');
  }
  if(!newBusiness.description) {
    errors.push('Please enter a description ⚠️');
  }
  if(!newBusiness.quadrant) {
    errors.push('Please select a quadrant ⚠️');
  }
  if(!newBusiness.imageUrl) {
    errors.push('Please enter an image url ⚠️');
  }
  return errors; 
};

export const validateOffering = (offering) => {
  const errors = [];

  if(!offering.dishName) {
    errors.push('Please enter a Name ⚠️');
  }
  if(!offering.imageUrl) {
    errors.push('Image url missing ⚠️');
  }
  if(!offering.description) {
    errors.push('Please enter a description ⚠️');
  }
  if(!offering.numRemaining) {
    errors.push('Please enter number of offerings ⚠️');
  }
  if(!offering.numRemaining || isNaN(offering.numRemaining)) {
    errors.push('Number of offerings must be a number ⚠️');
  }
  if(offering.numRemaining < 1) {
    errors.push('Number of offerings must be greater than 0 ⚠️');
  }
  if(!offering.pickUpDate) {
    errors.push('Please enter a pickup date ⚠️');
  }
  if(!offering.price) {
    errors.push('Please enter a price ⚠️');
  }
  if(!offering.price && isNaN(offering.price)) {
    errors.push('Offering price must be a number ⚠️');
  }

  return errors; 
};

export const validatePoll = (poll) => {
  const errors = [];

  if(!poll.name) {
    errors.push('Please enter a Poll Name ⚠️');
  }
  if(!poll.offering1Name) {
    errors
      .push('Please enter a name for: Offering 1 ⚠️');
  }
  if(!poll.offering2Name) {
    errors
      .push('Please enter a name for: Offering 2 ⚠️');
  }
  if(!poll.name) {
    errors.push('Please enter a Name ⚠️');
  }
  if(!poll.offering1ImageUrl) {
    errors.push('Image url missing (Offering 1) ⚠️');
  }
  if(!poll.offering2ImageUrl) {
    errors.push('Image url missing (Offering 2)⚠️');
  }
  if(!poll.offering1Description) {
    errors.push('Please enter a description (Offering 1) ⚠️');
  }
  if(!poll.offering2Description) {
    errors.push('Please enter a description (Offering 1) ⚠️');
  }
  if(!poll.start) {
    errors.push('Please enter start date for poll ⚠️');
  }
  if(!poll.end) {
    errors.push('Please enter an end date for poll ⚠️');
  }
  if(poll.status) {
    errors.push('Enter a status of Open or Closed ⚠️');
  }
  
  return errors; 
};
