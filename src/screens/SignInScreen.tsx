import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { AuthContext } from "../context/AuthContext";
import { clearErrorMessage } from "../actions/authActions";

const SignInScreen: React.FC = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "SignUp">>();

  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  useEffect(() => {
    if (state.isSignedIn) {
      // Reset the navigation stack and navigate to MainFlow
      navigation.reset({
        index: 0,
        routes: [{ name: "MainFlow" }],
      });
    }
  }, [state.isSignedIn, navigation]);

  // TODO: CLEAR ERROR MESSAGE ON SIGN IN AND SIGN UP WHEN NAVIGATION FROM A SCREEN
  //
  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       clearErrorMessage();
  //     };
  //   }, [clearErrorMessage]),
  // );

  const handleSignIn = async () => {
    await signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Tracker"
        errorMessage={state.errorMessage}
        onSubmit={handleSignIn}
        buttonTitle="Sign In"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <NavLink
        screenName="SignUp"
        text="Don't have an account? Sign Up instead!"
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

export default SignInScreen;
