import { AuthAction } from "../types";
import { AuthState } from "./types";

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userToken: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userToken: null };
    case "SIGN_UP":
      return {
        isSignedIn: true,
        userToken: action.payload,
        errorMessage: null,
      };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: null };
    default:
      return state;
  }
};

export default authReducer;
