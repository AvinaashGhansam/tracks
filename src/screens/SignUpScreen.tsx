import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";
import Spacer from "../components/Spacer";
import { AuthContext } from "../context/AuthContext";
import { AuthStackParamList } from "../types";
import AuthForm from "../components/AuthForm";

// Use a hook for navigation to simplify prop passing
const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState(""); // State moved here
  const [password, setPassword] = useState(""); // State moved here
  const { state, signUp } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "SignUp">>();

  useEffect(() => {
    if (state.isSignedIn) {
      // Reset the navigation stack and navigate to MainFlow
      navigation.reset({
        index: 0,
        routes: [{ name: "MainFlow" }],
      });
    }
  }, [state.isSignedIn]);

  const handleSignUp = async () => {
    await signUp({ email, password });
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={handleSignUp}
        buttonTitle="Sign Up"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  link: {
    color: "blue",
  },
});

export default SignUpScreen;
