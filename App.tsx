import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { NextHours } from "./components/NextHours";
import { CurrentTemperature } from "./components/CurrentTemperature";

import { useState } from "react";

// interfece / api request
import { getWeather } from "./services/WeatherService";
import { IWeather } from "./services/interfaces/WeatherService";
import { OHA } from "./components/oha";
import { DynamicBackground } from "./components/dynamicBackground";

import { EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // state / requisição

  const weatherInitialData: IWeather = {
    climate: "Carregando...",
    currentDay: "Carregando...",
    currentTime: "Carregando...",
    daysDegrees: [],
    nextHoursClimate: {
      climates: [],
      compoundHumidity: "Carregando...",
      humidity: 0,
    },
    weatherDegress: {
      compoundValue: "Carregando...",
      value: 0,
    },
  };

  const [weatherData, setWeather] = useState<IWeather>(weatherInitialData);

  navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude ).then((x) => setWeather(x));
  })

  if (!isLoadingComplete) {
    return null;
  } else {
    if (weatherData.currentTime == "night") {
      return (
        <SafeAreaProvider>
          <ImageBackground
            resizeMode="cover"
            source={require("../weatherApp/assets/images/night.png")}
            style={stylesTest.background}
          >
            <TouchableOpacity style={stylesTest.refreshButton}>
              <EvilIcons name="refresh" size={45} />
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesTest.refreshButton}
              onPress={() => navigator.geolocation.getCurrentPosition((position) => {
                getWeather(position.coords.latitude, position.coords.longitude ).then((x) => setWeather(x));
            })}
            >
              <EvilIcons name="refresh" size={45} />
            </TouchableOpacity>
            <DynamicBackground 
              currentTime={weatherData.currentTime} 
              currentClimate={weatherData.climate}  />
            <CurrentTemperature
              currentTemperature={weatherData?.weatherDegress.compoundValue}
            />
            <NextHours
              currentTime={weatherData.currentTime}
              climates={weatherData.nextHoursClimate}
            />
              <OHA daysDegrees={weatherData.daysDegrees}  />
          </ImageBackground>
        </SafeAreaProvider>
      );
    } else {
      return (
        <SafeAreaProvider>
          <ImageBackground
            resizeMode="cover"
            source={require("../weatherApp/assets/images/ensolarado.png")}
            style={stylesTest.background}
          >
            <TouchableOpacity style={stylesTest.refreshButton}>
              <EvilIcons name="refresh" size={45} />
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesTest.refreshButton}
              onPress={() => navigator.geolocation.getCurrentPosition((position) => {
                getWeather(position.coords.latitude, position.coords.longitude ).then((x) => setWeather(x));
            })}
            >
            <EvilIcons name="refresh" size={45} />
            </TouchableOpacity>
            <CurrentTemperature
              currentTemperature={weatherData?.weatherDegress.compoundValue}
            />
            <NextHours
              currentTime={weatherData.currentTime}
              climates={weatherData.nextHoursClimate}
            />
            <OHA daysDegrees={weatherData.daysDegrees} />
          </ImageBackground>
        </SafeAreaProvider>
      );
    }
  }
}

const stylesTest = StyleSheet.create({
  background: {
    flex: 1,
  },
  refreshButton: {
    position: "absolute",
    alignSelf: "flex-start",
    margin: 30,
  },
});
