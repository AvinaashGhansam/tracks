import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the parameter list for your stack navigator
type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  MainFlow: { screen: string }; // TODO: FOR TESTING ONLY
};

// Use a hook for navigation to simplify prop passing
const SignupScreen: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "SignUp">>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>SignUp</Text>
      <Button
        title="Go To Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Go To Main Flow"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "MainFlow" }],
          });
        }}
      />
    </SafeAreaView>
  );
};

export default SignupScreen;
