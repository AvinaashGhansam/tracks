import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Spacer from "./Spacer";
import { AuthStackParamList } from "../types";

type NavLinkProps = {
  screenName: keyof AuthStackParamList;
  text: string;
  params?: { screen: string };
};

const NavLink: React.FC<NavLinkProps> = ({ screenName, text, params }) => {
  // Use the navigation hook to get the navigation object
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const handlePress = () => {
    if (screenName === "MainFlow" && params) {
      navigation.navigate(screenName, params);
    } else {
      navigation.navigate(screenName as any);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
