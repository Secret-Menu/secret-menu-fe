export const selectRestaurant = state => state.auth.user?.restaurant[0];

export const selectPolls = state => state.business.polls ?? [];

export const selectOfferings = state => state.business.offerings ?? [];

export const selectOrders = state => state.business.orders ?? [];