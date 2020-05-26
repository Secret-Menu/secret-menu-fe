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

export const getUserFavorites = state => { 
  console.log(state.userProfile.userFavorites);
  return state.userProfile.userFavorites.map(favorite => {
    return favorite.restaurant;
  });
};
