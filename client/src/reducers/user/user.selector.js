import { createSelector } from "reselect";


const currentUser = state => state.user;

 export const setUser = createSelector(
    [currentUser],
    (user) => user.currentUser
);