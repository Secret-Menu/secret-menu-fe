import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART, addToCart } from './cartActions';

describe('cart actions', () => {
  it('creates an ADD_TO_CART action', () => {
    const action = addToCart({
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Shoyu Chicken Mixed Plate',
      quantity: 2,
      price: 2000,
      pickUpDate: 'May 5, 2021',
      total: 4000
    });
    
    expect(action).toEqual({
      type: ADD_TO_CART,
      payload: {
        restaurant: 'Chris\' Bamboo Grove',
        offering: 'Shoyu Chicken Mixed Plate',
        quantity: 2,
        price: 2000,
        pickUpDate: 'May 5, 2021',
        total: 4000
      }
    });
  });
});