import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NextHours } from './components/NextHours';
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { CurrentTemperature } from "./components/CurrentTemperature";
// icone
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
      <NextHours />
        <TouchableOpacity style={stylesTest.refreshButton}>
          <EvilIcons name="refresh" size={45} />
        </TouchableOpacity>
        <CurrentTemperature />
        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
      </SafeAreaProvider>
    );
  }
}

const stylesTest = StyleSheet.create({
  refreshButton: {
    position: "absolute",
    alignSelf: "flex-start",
    margin: 30,
  },
});
