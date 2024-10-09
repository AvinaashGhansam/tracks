import { LocationState } from "./types";
import { LocationAction } from "../types";

// TODO:
const locationReducer = (
  state: LocationState,
  action: LocationAction,
): LocationState => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};
export default locationReducer;
