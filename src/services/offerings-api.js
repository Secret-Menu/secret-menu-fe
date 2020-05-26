export const createOffering = offering => {
  return fetch(`${process.env.API_URL}/api/v1/offerings`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dishName: offering.name,
      imageUrl: offering.imageUrl,
      description: offering.description,
      numRemaining: offering.numRemaining,
      servingSize: offering.servingSize,
      dietaryRestriction: offering.dietaryRestriction
    })
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};