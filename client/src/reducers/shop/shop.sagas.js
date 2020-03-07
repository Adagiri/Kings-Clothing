import { all, call, put, takeLatest } from "redux-saga/effects";
import { shopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMapped = yield call(
      convertCollectionSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionMapped));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)])
}
