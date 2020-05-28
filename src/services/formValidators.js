export const validateSignUp = (newUser) => {
  const errors = [];

  if(newUser.firstName.length === 0) {
    errors.push('FIRST NAME Missing  ⚠️');
  }
  if(newUser.lastName.length === 0) {
    errors.push('LAST NAME Missing ⚠️');
  }
  if(newUser.email && newUser.email.length < 5) {
    errors.push('EMAIL is too short ⚠️');
  }
  if(newUser.email && newUser.email
    .split('')
    .filter(x => x === '@')
    .length !== 1) {
    errors.push('EMAIL is Missing an @ symbol ⚠️');
  }
  if(newUser.email && newUser.email.indexOf('.') === -1) {
    errors.push('EMAIL is Missing a dot ⚠️');
  }
  if(!newUser.email) {
    errors.push('EMAIL Missing  ⚠️');
  }
  if(!newUser.password) {
    errors.push('PASSWORD Missing ⚠️');
  }
  if(!newUser && newUser.password.length < 4) {
    errors.push('PASSWORD should be at least 4 characters long ⚠️');
  }
  return errors;
};

export const validateBusiness = (newBusiness) => {
  const errors = [];

  if(newBusiness.restaurantName.length === 0) {
    errors.push('Business NAME Missing ⚠️');
  }
  if(!newBusiness.address.streetAddress) {
    errors.push('STREET ADDRESS Invalid ⚠️');
  }
  if(!newBusiness.address.city) {
    errors.push('CITY Missing ⚠️');
  }
  if(!newBusiness.address.zipcode) {
    errors.push('ZIP CODE Invalid ⚠️');
  }
  if(!newBusiness.phoneNumber) {
    errors.push('PHONE Invalid ⚠️');
  }
  if(!newBusiness.websiteUrl) {
    errors.push('WEBSITE Missing ⚠️');
  }
  if(!newBusiness.email) {
    errors.push('EMAIL Missing ⚠️');
  }
  if(!newBusiness.description) {
    errors.push('Please enter a description ⚠️');
  }
  if(!newBusiness.quadrant) {
    errors.push('QUADRANT Missing ⚠️');
  }
  if(!newBusiness.imageUrl) {
    errors.push('IMAGE URL Missing ⚠️');
  }
  return errors; 
};

export const validateOffering = (offering) => {
  const errors = [];

  if(!offering.dishName) {
    errors.push('NAME missing ⚠️');
  }
  if(!offering.imageUrl) {
    errors.push('IMAGE URL missing ⚠️');
  }
  if(!offering.description) {
    errors.push('Please enter a description ⚠️');
  }
  if(!offering.numRemaining) {
    errors.push('NUMBER of offerings missing⚠️');
  }
  if(!offering.numRemaining || isNaN(offering.numRemaining)) {
    errors.push('NUMBER of offerings must be a number ⚠️');
  }
  if(offering.numRemaining < 1) {
    errors.push('NUMBER of offerings must be greater than 0 ⚠️');
  }
  if(!offering.pickUpDate) {
    errors.push('Please enter a pickup date ⚠️');
  }
  if(!offering.price) {
    errors.push('PRICE Missing ⚠️');
  }
  if(!offering.price && isNaN(offering.price)) {
    errors.push('Offering price must be a number ⚠️');
  }

  return errors; 
};

export const validatePoll = (poll) => {
  const errors = [];

  if(!poll.name) {
    errors.push('Missing NAME for Poll ⚠️');
  }
  if(!poll.offering1Name) {
    errors
      .push('Missing NAME: Offering 1 ⚠️');
  }
  if(!poll.offering2Name) {
    errors
      .push('Missing NAME: Offering 2 ⚠️');
  }
  if(!poll.name) {
    errors.push('Missing POLL NAME ⚠️');
  }
  if(!poll.offering1ImageUrl) {
    errors.push('Missing IMAGE (Offering 1) ⚠️');
  }
  if(!poll.offering2ImageUrl) {
    errors.push('Missing IMAGE (Offering 2)⚠️');
  }
  if(!poll.offering1Description) {
    errors.push('Missing DESCRIPTION (#1) ⚠️');
  }
  if(!poll.offering2Description) {
    errors.push('Missing DESCRIPTION (#2) ⚠️');
  }
  if(!poll.start) {
    errors.push('Missing START date ⚠️');
  }
  if(!poll.end) {
    errors.push('Missing END date ⚠️');
  }
  if(poll.status) {
    errors.push('Missing STATUS ⚠️');
  }
  
  return errors; 
};
