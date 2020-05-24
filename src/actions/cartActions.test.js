import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART, addToCart, removeFromCart, updateCartItem } from './cartActions';

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

  it('creates a REMOVE_FROM_CART action', () => {
    const action = removeFromCart(1);
    
    expect(action).toEqual({
      type: REMOVE_FROM_CART,
      payload: 1
    })
  })

  it('creates an UPDATE_CART_ITEM action', () => {
    const action = updateCartItem(1, {
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Shoyu Chicken Mixed Plate',
      quantity: 2,
      price: 2000,
      pickUpDate: 'May 5, 2021',
      total: 4000
    });

    expect(action).toEqual({
      type: UPDATE_CART_ITEM,
      payload: {
        index: 1,
        lineItem: {
          restaurant: 'Chris\' Bamboo Grove',
          offering: 'Shoyu Chicken Mixed Plate',
          quantity: 2,
          price: 2000,
          pickUpDate: 'May 5, 2021',
          total: 4000
        }
      }
    });
  });
});
