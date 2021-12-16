import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import HomeScreen from "./src/Screens/HomeScreen";
import CoinDetailsScreen from "./src/Screens/CoinDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import WatchListProvider from "./src/Contexts/WatchListContext";
export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <WatchListProvider>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Navigation />
        </View>
      </WatchListProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Constants.statusBarHeight,
  },
});
