import userActionTypes from "./user.types";

const initialState = {
  currentUser: null,
  errorMessage: null,
  signUpData: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };

    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };

    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        signUpData: action.payload
      };

    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
