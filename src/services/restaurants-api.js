export const createRestaurant = restaurant => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      owner: restaurant.owner,
      restaurantName: restaurant.restaurantName,
      address: restaurant.address,
      email: restaurant.email,
      phoneNumber: restaurant.phoneNumber,
      description: restaurant.description,
      category: restaurant.category,
      lat: restaurant.lat,
      lng: restaurant.lng,
      quadrant: restaurant.quadrant,
      websiteUrl: restaurant.websiteUrl,
      imageUrl: restaurant. imageUrl
    })
  })
  .then(res => Promise.all([res.ok, res.json()]))
  .then(([ok, json]) => {
    if(!ok) throw json;
    return json;
  })
}