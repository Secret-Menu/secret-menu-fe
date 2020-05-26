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
      restaurant: offering.restaurant,
      dietaryRestriction: offering.dietaryRestriction,
      pickUpDate: offering.pickUpDate,
      price: offering.price
    })
  })
    .then(res => res.json())
};

export const postPoll = poll => {
  return fetch(`${process.env.API_URL}/api/v1/polls`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: poll.dishName,
      offering1Name: poll.offering1Name,
      offering2Name: poll.poll2Name,
      start: poll.start,
      end: poll.end,
      offering1Votes: poll.offering1Votes,
      offering2Votes: poll.offering2Votes,
      offering1Description: poll.offering1Description,
      offering2Description: poll.offering2Description,
      offering1ImageUrl: poll.offering1ImageUrl,
      offering2ImageUrl: poll.offering2ImageUrl,
      status: poll.status,
      restaurant: poll.restaurant
    })
  })
    .then(res => res.json())
};
