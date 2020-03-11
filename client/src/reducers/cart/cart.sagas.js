import { take,takeLatest, put, all, call, select } from "redux-saga/effects";
import userActionTypes from "../user/user.types";
import { clearCart, setCartFromFirebase } from "./cart.actions";
import { getUserCartRef } from "../../firebase/firebase.utils";
import { cartTypesActions } from "./cart.types";
import { setUser } from "../user/user.selector";
import { selectCartItems } from "./cart.selectors";

export function* clearCartAll() {
  yield put(clearCart());
};

export function* clearCartOnSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartAll);
};

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
};

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
};

export function* updateCartInFirebase() {
  const currentUser = yield select(setUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
};

export function* onCartChange() {
  yield takeLatest(
    [
      cartTypesActions.ADD_ITEM,
      cartTypesActions.REDUCE_ITEM,
      cartTypesActions.CLERA_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
};

export function* cartSagas() {
  yield all([call(clearCartOnSignOut), call(onCartChange), call(onUserSignIn)]);
};
