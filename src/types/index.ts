import * as Location from "expo-location";
import { LocationObject } from "expo-location";
export type AuthAction =
  | { type: "SIGN_IN"; payload: string }
  | { type: "SIGN_OUT" }
  | { type: "SIGN_UP"; payload: string }
  | { type: "ADD_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" };

export type LocationAction = {
  type: "add_current_location";
  payload: LocationObject | null;
};
export type AuthStackParamList = {
  ResolveAuth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainFlow: { screen: string };
  LoginFlow: undefined;
};
