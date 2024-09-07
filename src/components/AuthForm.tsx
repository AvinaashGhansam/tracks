import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import React from "react";
import Spacer from "./Spacer";

interface IAuthForm {
  headerText: string;
  errorMessage: string | null;
  onSubmit: () => void;
  buttonTitle: string;
  email?: string;
  password?: string;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
}

const AuthForm: React.FC<IAuthForm> = ({
  headerText,
  errorMessage,
  onSubmit,
  buttonTitle,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <View>
      <Spacer>
        <Text style={styles.h1Style}>{headerText}</Text>
      </Spacer>

      {/* Conditionally render inputs only if setEmail and setPassword are provided */}
      {setEmail && setPassword && (
        <>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </>
      )}

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button title={buttonTitle} type="solid" onPress={onSubmit} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  h1Style: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  errorMessage: {
    fontSize: 14,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
