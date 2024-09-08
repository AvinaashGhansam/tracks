export type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};
