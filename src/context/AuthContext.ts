import authReducer from "../reducers/authReducer";
import {
  clearErrorMessage,
  signIn,
  signOut,
  signUp,
  tryLocalSignIn,
} from "../actions/authActions";
import createDataContext from "./createDataContext";

/**
 *
 * @property {boolean} isSignedIn - Indicate whether the user is signed in.
 * @property {string | null} userToken - The user authentication token, if available.
 * @property {string | null} errorMessage - The error message to display if any
 *
 */
type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};

/**
 * The initial state for the authentication context.
 *
 * @type {AuthState}
 */
const initialState: AuthState = {
  isSignedIn: false,
  userToken: null,
  errorMessage: null,
};

/**
 * The authentication context and provider are created using the `createDataContext` utility.
 * This context provides access to the authentication state and actions throughout the app.
 *
 * @property {React.Context} AuthContext - The context object to be used by components to access authentication state and actions.
 * @property {React.ComponentType} AuthProvider - The provider component that wraps the app and supplies authentication state and actions.
 */
export const { Context: AuthContext, Provider: AuthProvider } =
  createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
    initialState,
  );
