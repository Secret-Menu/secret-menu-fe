export const getUserOrders = state => { 
  return state.userProfile.userOrders.map(order => ({
    info: order.restaurant.restaurantName,
    date: new Date(order.pickUpDate),
    orders: order.offering
  }))
    .sort(function(a, b) {
      return a.date - b.date;
    });
};

export const getUpcomingUserOrders = state => {
  return getUserOrders(state)
    .filter(order => {
      const today = new Date();
      return order.date > today;
    });
};

export const getPreviousUserOrders = state => {
  return getUserOrders(state)
    .filter(order => {
      const today = new Date();
      return order.date < today;
    });
};

export const getUserFavorites = state =>  state.userProfile.userFavorites;

export const getUserPolls = state => { 
  if(!state.userProfile.userPolls) return [];
  return state.userProfile.userPolls.map(poll => ({
    ...poll,
    end: new Date(poll.end)
  }))
    .sort(function(a, b) {
      return a.end - b.end;
    });
};

export const getUpcomingUserPolls = state => {
  return getUserPolls(state)
    .filter(poll => {
      const today = new Date();
      return poll.end > today;
    });
};

export const getPreviousUserPolls = state => {
  return getUserPolls(state)
    .filter(poll => {
      const today = new Date();
      return poll.end < today;
    });
};
