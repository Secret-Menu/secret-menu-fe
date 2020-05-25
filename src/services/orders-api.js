export const fetchOrdersByUserId = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/orders/user/${id}`)
    .then(res => res.json());
};
