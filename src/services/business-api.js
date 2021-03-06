export const fetchBusinessOfferings = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res => res.offerings);
};
export const fetchBusinessPolls = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json())
    .then(res => res.polls);
};

export const fetchBusiness = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/restaurants/${id}`)
    .then(res => res.json());
};

export const fetchBusinessOrders = (id) => {
  return fetch(`${process.env.API_URL}/api/v1/orders/restaurant/${id}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) =>{ 
      if(!ok) throw json;
      return json;
    });
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
      name: poll.name,
      offering1Name: poll.offering1Name,
      offering2Name: poll.offering2Name,
      start: poll.start,
      end: poll.end,
      offering1Votes: 0,
      offering2Votes: 0,
      offering1Description: poll.offering1Description,
      offering2Description: poll.offering2Description,
      offering1ImageUrl: poll.offering1ImageUrl,
      offering2ImageUrl: poll.offering2ImageUrl,
      status: poll.status,
      restaurant: poll.restaurant
    })
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) =>{ 
      if(!ok) throw json;
      return json;
    });
};

export const patchOrder = (id, offeringId) => {
  return fetch(`${process.env.API_URL}/api/v1/orders/${id}/close/${offeringId}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res =>  Promise.all([res.ok, res.json()]))
    .then(([ok, json]) =>{ 
      if(!ok) throw json;
      return json;
    });
};
