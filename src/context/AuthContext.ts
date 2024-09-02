import authReducer from "../reducers/authReducer";
import { signIn, signOut, signUp } from "../actions/authActions";
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
  errorMessage: "",
};

// Create AuthContext and AuthProvider using the createDataContext utility
export const { Context: AuthContext, Provider: AuthProvider } =
  createDataContext(authReducer, { signIn, signOut, signUp }, initialState);
