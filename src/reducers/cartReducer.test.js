import reducer from './cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions/cartActions';

describe('cartReducer tests', () => {
  it('handles ADD_TO_CART action', () => {
    const state = [];

    const lineItem = {
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Shoyu Chicken Mixed Plate',
      quantity: 2,
      price: 2000,
      pickUpDate: 'May 5, 2021',
      total: 4000
    };

    const action = {
      type: ADD_TO_CART,
      payload: lineItem
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        restaurant: 'Chris\' Bamboo Grove',
        offering: 'Shoyu Chicken Mixed Plate',
        quantity: 2,
        price: 2000,
        pickUpDate: 'May 5, 2021',
        total: 4000
      }
    ]);
  });

  it('handles the REMOVE_FROM_CART action', () => {
    const state = [{
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Shoyu Chicken Mixed Plate',
      quantity: 2,
      price: 2000,
      pickUpDate: 'May 5, 2021',
      total: 4000
    }];

    const action = {
      type: REMOVE_FROM_CART,
      payload: 0
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });

  it('handles the UPDATE_CART_ITEM action', () => {
    const state = [{
      restaurant: 'Chris\' Bamboo Grove',
      offering: 'Shoyu Chicken Mixed Plate',
      quantity: 2,
      price: 2000,
      pickUpDate: 'May 5, 2021',
      total: 4000
    }];

    const action = {
      type: UPDATE_CART_ITEM,
      payload: {
        index: 0,
        lineItem: {
          restaurant: 'Chris\' Bamboo Grove',
          offering: 'Shoyu Chicken Mixed Plate',
          quantity: 3,
          price: 2000,
          pickUpDate: 'May 5, 2021',
          total: 6000
        }
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([
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
