import { StyleSheet, View } from "react-native";
import React from "react";
import MapView, { Polyline } from "react-native-maps";

const Map: React.FC = () => {
  let dummyPoints = [];
  for (let i = 0; i < 20; i++) {
    dummyPoints.push({
      latitude: 39.994632 + i * 0.001,
      longitude: -74.772945 + i * 0.001,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 39.994632,
        longitude: -74.772945,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={dummyPoints} />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: "75%",
  },
});
export default Map;
