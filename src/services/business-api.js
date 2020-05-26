export const fetchBusinessOfferings = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res.offerings);
};

export const fetchBusiness = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
};

// export const fetchBusinessPolls = (id) => {
//   return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
//     .then(res => res.json())
//     .then(res.polls);
// };

export const postOffering = offering => {
  return fetch(`${process.env.API_URL}/api/v1/offerings`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dishName: offering.dishName,
      imageUrl: offering.imageUrl,
      description: offering.description,
      numRemaining: offering.numRemaining,
      restaurant: offering.restaurantId,
      dietaryRestriction: offering.dietaryRestriction,
      pickUpDate: offering.pickUpDate,
      price: offering.price
    })
  })
    .then(res => res.json())
};

export const addPoll = (restaurantId) => {
  return fetch(`${process.env.API_URL}/api/v1/polls/`)
    .then(res => res.json())
};
