import {CartActions} from '@store/types/cart';
import {CART} from '@utils/data/cart';

interface InitialState {
  items: any[];
  total: number;
}

const initialState: InitialState = {
  items: CART,
  total: 0,
};

const CartReducer = (state = initialState, action: CartActions) => {
  /*    switch (action.type) {
      case SELECT_CATEGORY:
        const indexCategory = state.categories.findIndex(
          category => category.id === action.payload,
        );
        if (indexCategory === -1) return state;
        return {
          ...state,
          selected: state?.categories[indexCategory],
        };
    } */
  return state;
};

export default CartReducer;
