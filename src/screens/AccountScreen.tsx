import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";

const AccountScreen: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "LoginFlow">>();

  const handleSignOut = async () => {
    await signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginFlow" }],
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default AccountScreen;
