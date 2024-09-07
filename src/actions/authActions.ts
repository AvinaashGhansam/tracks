import { Dispatch } from "react";
import trackerApi from "../api/trackerApi";
import { AuthAction, AuthStackParamList } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";

// Action creator for signIn
export const signIn =
  (dispatch: Dispatch<AuthAction>) =>
  async ({ email, password }: { email: string; password: string }) => {
    console.log("Signing in with email:", email, "password:", password);

    // 1. Try to sign in
    try {
      const res = await trackerApi.post("/signin", { email, password });
      // When token is retrieved
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "SIGN_IN", payload: res.data.token });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong signing in",
      });
    }
  };

export const signOut = (dispatch: Dispatch<AuthAction>) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
};

// Action creator for signUp
export const signUp =
  (dispatch: Dispatch<AuthAction>) =>
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
      });
      const { token } = response.data;

      // Dispatch the action to update the state
      dispatch({ type: "SIGN_UP", payload: token });
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGN_UP", payload: token });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with signup",
      });
    }
  };

// BUG: Infinite loop
export const clearErrorMessage = (dispatch: Dispatch<AuthAction>) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

// Try to find a token in local storage to automatically sign user in
export const tryLocalSignIn =
  (dispatch: Dispatch<AuthAction>) => async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "SIGN_IN", payload: token });
      return true;
    } else {
      return false;
    }
  };
