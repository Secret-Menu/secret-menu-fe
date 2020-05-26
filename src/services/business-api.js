export const fetchBusinessOfferings = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res.offerings);
};

export const fetchBusiness = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
};

export const fetchBusinessOrders = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/orders/restaurant/${id}`)
    .then(res => res.json())
};
// export const fetchBusinessPolls = (id) => {
//   return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
//     .then(res => res.json())
//     .then(res.polls);
// };

export const addOffering = (restaurantId) => {
  return fetch(`${process.env.API_URL}/api/v1/offerings/`)
    .then(res => res.json())
};

export const addPoll = (restaurantId) => {
  return fetch(`${process.env.API_URL}/api/v1/polls/`)
    .then(res => res.json())
};
