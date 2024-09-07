import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { AuthContext } from "../context/AuthContext";

const ResolveAuthScreen: React.FC = () => {
  const { tryLocalSignIn } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "SignUp">>();

  // Check for token and navigate based on its existence
  useEffect(() => {
    const checkAuth = async () => {
      const tokenExists = await tryLocalSignIn();
      if (tokenExists) {
        navigation.reset({
          index: 0,
          routes: [{ name: "MainFlow" }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginFlow" }],
        });
      }
    };
    void checkAuth();
  }, [tryLocalSignIn, navigation]);

  return null;
};

export default ResolveAuthScreen;
