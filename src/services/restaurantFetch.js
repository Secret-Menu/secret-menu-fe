export const getAreaRestaurants = (quadrant) => {
  return fetch(`https://crowd-pleaser-staging.herokuapp.com/api/v1/restaurants?quadrant=${quadrant}`)
    .then(res => res.json());
};
