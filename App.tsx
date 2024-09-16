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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { LocationProvider } from "./src/context/LocationContext";

const LoginFlowStack = createStackNavigator();

/**
 * Stack Navigator for handing the login flow
 * - **SignUpScreen**: Allows the user to sign up and use the application
 * - **SignInScreen**: Allows the user to sign in if an account exist
 * @component
 * @return {React.FC} a stack navigator that manages the login and sign-up screens
 */
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

const TrackListStack = createStackNavigator();

/**
 * Stack Navigator for handling the Track List and Track Detail screens.
 *
 * - **TrackListScreen**: Displays a list of tracks created by the user.
 * - **TrackDetailScreen**: Displays detailed information about a specific track.
 * @component
 * @returns {JSX.Element} A stack navigator that manages track list and detail views.
 */
function TrackListStackNavigator(): JSX.Element {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
}

const MainFlowTabs = createBottomTabNavigator();
/**
 * Bottom Tab Navigator for the main flow of the application.
 *
 * - **TrackListFlow**: Manages the track list and track detail views.
 * - **TrackCreateScreen**: Allows the user to create a new track.
 * - **AccountScreen**: Displays account-related actions and information.
 *
 * @returns {JSX.Element} A bottom tab navigator that provides access to the main sections of the app.
 */
function MainFlowNavigator(): JSX.Element {
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

/**
 * Top-level Stack Navigator for switching between authentication flow and main application flow.
 *
 * - **ResolveAuthScreen**: Checks if the user is authenticated and navigates accordingly.
 * - **LoginFlowNavigator**: Manages the login and sign-up flow.
 * - **MainFlowNavigator**: Manages the main application flow once the user is authenticated.
 *
 * @returns {JSX.Element} The root stack navigator that switches between different app flows.
 */
const RootStack = createStackNavigator();

function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen
              name="ResolveAuth"
              component={ResolveAuthScreen}
            />
            <RootStack.Screen name="LoginFlow" component={LoginFlowNavigator} />
            <RootStack.Screen name="MainFlow" component={MainFlowNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </LocationProvider>
  );
}

export default App;
