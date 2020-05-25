export const fetchOrdersByUserId = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/orders/user/${id}`)
    .then(res => res.json());
};

export const postOrder = order => {
  return fetch(`${process.env.API_URL}/api/v1/orders/`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
}
