import "../_mockLocation";
import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Map from "../components/Map";

import { LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { LocationObject } from "expo-location";
import { useIsFocused } from "@react-navigation/native";

const CreateTrackScreen: React.FC = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation((location: LocationObject) => {
    addLocation(location);
  });
  const isFocused = useIsFocused();
  console.log(isFocused);

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
