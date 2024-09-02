import { Dispatch } from "react";
import trackerApi from "../api/trackerApi";
import { AuthAction } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Action creator for signIn
export const signIn = (dispatch: Dispatch<AuthAction>) => (token: string) => {
  dispatch({ type: "SIGN_IN", payload: token });
};

// Action creator for signOut
export const signOut = (dispatch: Dispatch<AuthAction>) => () => {
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
