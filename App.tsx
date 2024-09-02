import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import CreateTrackScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { AuthProvider } from "./src/context/AuthContext";

// Stack Navigator for the Sign Up and Sign In screens
const LoginFlowStack = createStackNavigator();

function LoginFlowNavigator() {
  return (
    <LoginFlowStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginFlowStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />
      <LoginFlowStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: "Sign In",
          headerBackTitle: "Sign Up",
        }}
      />
    </LoginFlowStack.Navigator>
  );
}

// Stack Navigator for the Track List and Track Detail screens
const TrackListStack = createStackNavigator();

function TrackListStackNavigator() {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
}

// Bottom Tab Navigator for the main application flow
const MainFlowTabs = createBottomTabNavigator();

function MainFlowNavigator() {
  return (
    <MainFlowTabs.Navigator>
      <MainFlowTabs.Screen
        name="TrackListFlow"
        component={TrackListStackNavigator}
        options={{ headerShown: false }}
      />
      <MainFlowTabs.Screen name="TrackCreate" component={CreateTrackScreen} />
      <MainFlowTabs.Screen name="Account" component={AccountScreen} />
    </MainFlowTabs.Navigator>
  );
}

// Top-level Stack Navigator that switches between login flow and main application flow
const RootStack = createStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="LoginFlow" component={LoginFlowNavigator} />
          <RootStack.Screen name="MainFlow" component={MainFlowNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
