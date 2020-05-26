export const selectRestaurant = state => state.auth.user.restaurant[0];

export const selectPolls = state => state.auth.user.restaurant[0].polls;

export const selectOfferings = state => state.auth.user.restaurant[0].offerings;