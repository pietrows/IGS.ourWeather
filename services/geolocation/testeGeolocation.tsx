import React from "react";
import { getWeather } from "./services/WeatherService";

const currentGeolocation = () => {
  navigator.geolocation.getCurrentPosition((posicao) => {
    setWeather({
      latitude: posicao.coords.latitude,
      longitude: posicao.coords.longitude,
      latitudeDelta: 0.014,
      longitudeDelta: 0.014,
    });
  });
};
