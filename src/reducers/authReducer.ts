import { AuthAction } from "../types";

type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userToken: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userToken: null };
    case "SIGN_UP":
      return { isSignedIn: true, userToken: action.payload, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
