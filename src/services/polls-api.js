export const fetchVote = (id, offering, count) => {
  const Object = { [offering]: count };
  return fetch(`${process.env.API_URL}/api/v1/polls/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object) 
  })
    .then(res => res.json());
};
