import React from "react";
import { Button, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type AuthStackParamList = {
  TrackListScreen: undefined;
  TrackDetail: undefined;
};

type TrackListScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "TrackListScreen"
>;

const TrackListScreen: React.FC = () => {
  // Get the navigation object with the correct type
  const navigation = useNavigation<TrackListScreenNavigationProp>();
  return (
    <View>
      <Text>Track list screen</Text>
      <Button
        title="Go to track details"
        onPress={() => {
          // Navigate to "TrackDetailPage" and pass any required params
          navigation.navigate("TrackDetail");
        }}
      />
    </View>
  );
};
export default TrackListScreen;
