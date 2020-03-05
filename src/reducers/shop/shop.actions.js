import { shopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    console.log(collectionRef);
    collectionRef
      .get()
      .then(snapshot => {
        console.log(snapshot)
        const collectionMapped = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMapped));
      })
      .catch(err => {
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};
