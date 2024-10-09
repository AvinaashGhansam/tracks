import * as Location from "expo-location";
import { Dispatch } from "react";
import { AuthAction, LocationAction } from "../types";

export const startRecording =
  (dispatch: Dispatch<LocationAction>) =>
  async (dispatch: Dispatch<LocationAction>) => {};

export const stopRecording =
  (dispatch: Dispatch<LocationAction>) =>
  async (dispatch: Dispatch<LocationAction>) => {};

export const addLocation =
  (dispatch: Dispatch<LocationAction>) =>
  (location: Location.LocationObject | null) => {
    dispatch({ type: "add_current_location", payload: location });
  };
