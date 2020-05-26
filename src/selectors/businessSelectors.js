export const selectRestaurant = state => state.auth.user?.restaurant[0];

export const selectPolls = state => selectRestaurant(state)?.polls ?? [];

export const selectOfferings = state => selectRestaurant(state)?.offerings ?? [];

export const selectOrders = state => selectRestaurant(state)?.orders ?? [];