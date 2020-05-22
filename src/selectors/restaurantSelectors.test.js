import { getRestaurant } from './restaurantSelectors';

describe('restaurant selector testing', () => {
  it('selects a restaurant', () => {
    const state = {
      restaurants: {
        restaurant: 
      {
        address: {
          streetAddress: '789 Main St.',
          city: 'Portland',
          state: 'OR',
          zipcode: 97218
        },
        _id: '5ec70ee38354c34afaa9bc2b',
        restaurantName: 'Josh\'s Vegan Palace',
        phoneNumber: '503-555-7777',
        category: 'American',
        quadrant: 'Northeast',
        lat: 45.5446,
        lng: -122.664385,
        description: 'Josh\'s Vegan Palace description goes here',
        imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2017/04/carot-falafel_charlie-richards.cropped.jpg?quality=45&resize=768,574',
        websiteUrl: 'https://joshsveganpalace.com',
        email: 'hello@joshsveganpalace.com' }
      }
    };

    const restaurant = getRestaurant(state);

    expect(restaurant).toEqual({
      address: {
        streetAddress: '789 Main St.',
        city: 'Portland',
        state: 'OR',
        zipcode: 97218
      },
      _id: '5ec70ee38354c34afaa9bc2b',
      restaurantName: 'Josh\'s Vegan Palace',
      phoneNumber: '503-555-7777',
      category: 'American',
      quadrant: 'Northeast',
      lat: 45.5446,
      lng: -122.664385,
      description: 'Josh\'s Vegan Palace description goes here',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2017/04/carot-falafel_charlie-richards.cropped.jpg?quality=45&resize=768,574',
      websiteUrl: 'https://joshsveganpalace.com',
      email: 'hello@joshsveganpalace.com' }     
    );
  });
});
