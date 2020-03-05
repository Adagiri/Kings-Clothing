import { takeLatest, put, all, call } from 'redux-saga/effects';
import { cartTypesActions } from './cart.types';
import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';


export function* clearCartAll() {
    yield put(clearCart());
};

export function* clearCartOnSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartAll)
};

export function* cartSagas() {
    yield all([call(clearCartOnSignOut)]);
}