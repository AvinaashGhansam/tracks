import "../_mockLocation";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
// TODO: Location Architecture
const CreateTrackScreen: React.FC = () => {
  const [err, setErr] = React.useState<string | null>(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          // console.log(location);
        },
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

  return (
    <SafeAreaView>
      <Text style={styles.header}>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
  },
});
export default CreateTrackScreen;
