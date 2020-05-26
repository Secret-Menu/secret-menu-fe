export const getFavorites = () => {
  return fetch(`${process.env.API_URL}/api/v1/favorites`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(res => res.json());
};

export const addFavorite = (user, restaurant) => {
  return fetch(`${process.env.API_URL}/api/v1/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      user: user._id,
      restaurant: restaurant._id
    })
  })
    .then(res => res.json());
};
