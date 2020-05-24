import { selectCart } from './cartSelectors';

describe('cart seelctors tests', () => {
  it('selects the cart', () => {
    const state = {
      cart: [{
        restaurant: 'Chris\' Bamboo Grove',
        offering: 'Shoyu Chicken Mixed Plate',
        quantity: 3,
        price: 2000,
        pickUpDate: 'May 5, 2021',
        total: 6000
      }]
    };

    const cart = selectCart(state);
    expect(cart).toEqual([
      {
        restaurant: 'Chris\' Bamboo Grove',
        offering: 'Shoyu Chicken Mixed Plate',
        quantity: 3,
        price: 2000,
        pickUpDate: 'May 5, 2021',
        total: 6000
      }
    ]);
  });
});
