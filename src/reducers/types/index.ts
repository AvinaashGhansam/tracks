import * as Location from "expo-location";

export type AuthState = {
  isSignedIn: boolean;
  userToken: string | null;
  errorMessage: string | null;
};
export type LocationState = {
  recording: boolean;
  location: Location.LocationObject | null;
  currentLocation: Location.LocationObject | null;
};
