import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Circle, Polyline } from "react-native-maps";
import { LocationContext } from "../context/LocationContext";

const Map: React.FC = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="rba(158, 255, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: "75%",
  },
});
export default Map;
