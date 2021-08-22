import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT } from '../action/products';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
          return {
            ...state,
            userProducts: state.userProducts.filter(
                //If filter function returns true - keep /or not
              product => product.id !== action.pid
            ),
            availableProducts: state.availableProducts.filter(
                product => product.id !== action.pid
              ),
          };
      }
    return state;
};