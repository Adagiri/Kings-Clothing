import { cartTypesActions } from "./cart.types";
import { addItemToCart, reduceCartItem } from "./cart.utils";
import userActionTypes from "../user/user.types";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypesActions.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartTypesActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      case cartTypesActions.CLERA_ITEM_FROM_CART: 
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };

      case cartTypesActions.REDUCE_ITEM: 
      return {
        ...state,
        cartItems: reduceCartItem(state.cartItems, action.payload)
      }

      case cartTypesActions.CLEAR_CART:
        return {
          ...state,
          cartItems: []
        }

    default:
      return state;
  }
};

export default cartReducer;
