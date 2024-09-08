import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { AuthStackParamList } from "../types";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signUp } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "MainFlow">>();

  useEffect(() => {
    if (state.isSignedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: "MainFlow" }],
      });
    }
  }, [state.isSignedIn, navigation]);

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
      <NavLink
        screenName="SignIn"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignUpScreen;
