import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./user.actions";

//signInWithGoogle

////refactor start
export function* signInAuthenticate(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
///refactor end

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield signInAuthenticate(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//EmailAndPasswordSignIn

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signInAuthenticate(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//SignOut

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

//sign up

export function* signUp({payload: {email, password, displayName}}) {

  try{
  const {user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData: {displayName}}));

  }catch(error) {
    yield put(signUpFailure(error.message))
  }
}

export function* signInAfterSignUp({payload:{user, additionalData}}) {
yield signInAuthenticate(user, additionalData)
}

export function* onSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

//user session

export function* isUserAuthenticated() {
 try {
 const userAuth = yield getCurrentUser();
 if (!userAuth) {
   return ;
 }
yield signInAuthenticate(userAuth)
 }
 catch(error) {
   yield put(signInFailure(error.message))
 }
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess),
    call(onCheckUserSession)
  ]);
}
