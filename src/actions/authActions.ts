import { Dispatch } from "react";
import trackerApi from "../api/trackerApi";
import { AuthAction } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Action creator for signIn
export const signIn =
  (dispatch: Dispatch<AuthAction>) =>
  async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const res = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "SIGN_IN", payload: res.data.token });
      return true; // Indicate successful sign-in
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong signing in",
      });
      return false; // Indicate sign-in failure
    }
  };

// Action creator for signOut
export const signOut = (dispatch: Dispatch<AuthAction>) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
};

// Action creator for signUp
export const signUp =
  (dispatch: Dispatch<AuthAction>) =>
  async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const { token } = response.data;

      dispatch({ type: "SIGN_UP", payload: token });
      await AsyncStorage.setItem("token", token);
      return true; // Indicate successful sign-up
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with signup",
      });
      return false; // Indicate sign-up failure
    }
  };

// BUG: INFINITE LOOP Clear error message
export const clearErrorMessage = (dispatch: Dispatch<AuthAction>) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

// Try to find a token in local storage to automatically sign user in
export const tryLocalSignIn =
  (dispatch: Dispatch<AuthAction>) => async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "SIGN_IN", payload: token });
      return true; // User is signed in
    } else {
      return false; // No token found
    }
  };
