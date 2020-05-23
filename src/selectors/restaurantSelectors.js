export const selectAllRestaurants = state => state.restaurants.allRestaurants;
export const selectAreaRestaurants = state => state.restaurants.areaRestaurants;
export const getRestaurant = state => state.restaurants.restaurant;
export const getRestaurantLat = state => state.restaurants.restaurant.lat;
export const getRestaurantLng = state => state.restaurants.restaurant.lng;
