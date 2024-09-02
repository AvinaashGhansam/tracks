import { StyleSheet, View } from "react-native";
import React from "react";

interface ISpacerProps {
  children: React.ReactNode;
}
const Spacer: React.FC<ISpacerProps> = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};
const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});
export default Spacer;
