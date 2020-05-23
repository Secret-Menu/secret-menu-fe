export const fetchBusinessOfferings = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res.offerings);
};

export const fetchBusinessPolls = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res.polls);
};
