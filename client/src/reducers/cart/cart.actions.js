import { cartTypesActions } from "./cart.types";

export const hideCart = () => {
  return {
    type: cartTypesActions.TOOGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: cartTypesActions.ADD_ITEM,
    payload: item
  };
};

export const reduceItem = item => ({
  type: cartTypesActions.REDUCE_ITEM,
  payload: item
});

export const clearItem = item => {
  return {
    type: cartTypesActions.CLERA_ITEM_FROM_CART,
    payload: item
  };
};

export const clearCart = () => {
  return {
    type: cartTypesActions.CLEAR_CART
  }
};

export const setCartFromFirebase = (data) => {
  return {
    type: cartTypesActions.SET_CART_FROM_FIREBASE,
    payload: data
  }
};

export const updateCartInFirebase = () => ({
  type: cartTypesActions.UPDATE_CART_IN_FIREBASE
});

