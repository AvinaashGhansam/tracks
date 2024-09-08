import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { AuthContext } from "../context/AuthContext";

const SignInScreen: React.FC = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "MainFlow">>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state.isSignedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: "MainFlow" }],
      });
    }
  }, [state.isSignedIn, navigation]);

  // BUG: INFINITE LOOP
  /* useFocusEffect(
    useCallback(() => {
      clearErrorMessage();
    }, [clearErrorMessage]),
  );*/

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
