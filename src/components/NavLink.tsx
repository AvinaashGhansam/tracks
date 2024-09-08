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
      // Specific navigation when screen is "MainFlow" and params are provided
      navigation.navigate("MainFlow", params);
    } else if (
      screenName === "SignIn" ||
      screenName === "SignUp" ||
      screenName === "ResolveAuth" ||
      screenName === "LoginFlow"
    ) {
      // Directly navigate to screens that don't require params
      navigation.navigate(screenName);
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
