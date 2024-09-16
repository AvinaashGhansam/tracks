export type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};
export type LocationState = {
  recording: boolean;
  location: Array<Location> | null;
  currentLocation: Location | null;
};
