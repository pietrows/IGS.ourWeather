import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { NextHours } from './components/NextHours';
import { CurrentTemperature } from "./components/CurrentTemperature";

import { useState } from "react";

// interfece / api request
import { getWeather } from "./services/WeatherService";
import { IWeather } from "./services/interfaces/WeatherService";

import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // state / requisição

  const weatherInitialData : IWeather = {
    climate: "Carregando...",
    currentDay: "Carregando...",
    currentTime: "Carregando...",
    daysDegrees: [],
    nextHoursClimate: {
      climates: [],
      compoundHumidity: "Carregando...",
      humidity: 0
    },
    weatherDegress: {
      compoundValue: "Carregando...",
      value: 0
    }
  }

  const [weatherData, setWeather] = useState<IWeather>(weatherInitialData);
  getWeather().then((x) => setWeather(x));

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

      
        <TouchableOpacity style={stylesTest.refreshButton}>
          <EvilIcons name="refresh" size={45} />
          
        </TouchableOpacity>
          <CurrentTemperature />
          
        <TouchableOpacity
          style={stylesTest.refreshButton}
          onPress={() => getWeather().then((x) => setWeather(x))}
        >
          <EvilIcons name="refresh" size={45} />
        </TouchableOpacity>
        <CurrentTemperature
          currentTemperature={weatherData?.weatherDegress.compoundValue}/>
          <NextHours 
            currentTime={weatherData.currentTime}
            climates={weatherData.nextHoursClimate}/>
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
