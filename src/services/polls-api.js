export const fetchVote = (id, offering, count) => {
  const Object = { [offering]: count };
  return fetch(`${process.env.API_URL}/api/v1/polls/vote/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(Object) 
  })
    .then(res => res.json());
};

export const createPoll = poll => {
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
      offering1Description: poll.offering1Description,
      offering2Description: poll.offering2Description,
      offering1ImageUrl: poll.offering1ImageUrl,
      offering2ImageUrl: poll.offering2ImageUrl
    })
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const fetchUserPolls = (userId) => {
  return fetch(`${process.env.API_URL}/api/v1/polls`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(res => { 
      const userPolls = res.filter(poll => poll.voters.find(voter => voter === userId));
      if(userPolls.length > 0) return userPolls;
      else return;
    });
};
