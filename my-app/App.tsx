import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Screen_01 from "./screens/Screen01";
import Screen_02 from "./screens/Screen02";
import Screen_03 from "./screens/Screen03";
import React from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_01"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
        <Stack.Screen name="Screen_03" component={Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
