import createDataContext from "./createDataContext";
import locationReducer from "../reducers/locationReducer";
import {
  addLocation,
  startRecording,
  stopRecording,
} from "../actions/locationAction";
import { LocationState } from "../reducers/types";

const initialState: LocationState = {
  recording: false,
  location: null,
  currentLocation: null,
};
export const { Context: LocationContext, Provider: LocationProvider } =
  createDataContext(
    locationReducer,
    {
      startRecording,
      stopRecording,
      addLocation,
    },
    initialState,
  );
