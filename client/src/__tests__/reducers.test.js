//import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food'}],
    currentCategory: '1',
};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });