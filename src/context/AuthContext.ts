import authReducer from "../reducers/authReducer";
import {
  clearErrorMessage,
  signIn,
  signOut,
  signUp,
  tryLocalSignIn,
} from "../actions/authActions";
import createDataContext from "./createDataContext";

// Define the initial state for authentication
type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};

const initialState: AuthState = {
  isSignedIn: false,
  userToken: null,
  errorMessage: null,
};

// Create AuthContext and AuthProvider using the createDataContext utility
export const { Context: AuthContext, Provider: AuthProvider } =
  createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
    initialState,
  );
