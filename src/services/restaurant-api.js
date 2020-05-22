export const fetchRestaurantById = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json());
};
