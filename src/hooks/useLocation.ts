import { useContext, useEffect, useState } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import * as Location from "expo-location";

const useLocation = (callback: (location: Location.LocationObject) => void) => {
  const [err, setErr] = useState<string | null>(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message);
      }
    }
  };

  useEffect(() => {
    void startWatching();
  }, []);

  return [err];
};
export default useLocation;
