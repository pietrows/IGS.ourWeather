import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { INextHoursClimate } from "../services/interfaces/WeatherService";

interface NextHoursProps {
    currentTime: string;
    climates: INextHoursClimate;
}

export function NextHours(props: NextHoursProps) {
  const data = props.climates;

  return (
    <View style={estilo.container}>
      {data.climates.map((item) => {
        return (
          <View style={estilo.clima}>
            <View>{getIcons(props.currentTime, item.value.toLocaleLowerCase())}</View>
            <Text style={estilo.text}>{item.value}</Text>
            <Text style={estilo.text}>{item.hour}</Text>
          </View>
        );
      })}

      <View style={estilo.clima}>
        <View>
          <Image
            style={estilo.gotaImage}
            source={require("../assets/assetsOurWeather/icones/gota.png")}
          />
        </View>
        <Text style={estilo.gota}>{data.compoundHumidity}</Text>
        <Text style={estilo.text}>Umidade</Text>
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 15,
    zIndex: 1,
  },
  clima: {
    flexDirection: "column",
    flex: 1,
  },
  text: {
    fontSize: 13,
    color: "white",
  },
  image: {
    height: 62,
    width: 62,
    alignSelf: "center",
  },
  gota: {
    alignSelf: "center",
    position: "absolute",
    paddingTop: 30,
    fontSize: 17,
  },
  gotaImage: {
    alignSelf: "center",
    height: 62,
    width: 50,
  },
});

export const getIcons = (day: string, climate: string) => {
    let imgNight;
    let imgDay;

    try {
        // imgNight = require("../assets/assetsOurWeather/icones/noite/" + climate + ".png");
        imgNight = require("../assets/assetsOurWeather/icones/noite/limpar.png");

    }
    catch {
        imgNight = require("../assets/assetsOurWeather/icones/noite/limpar.png");
    }

    try {
        // imgDay = require("../assets/assetsOurWeather/icones/dia/" + climate + ".png");
        imgDay = require("../assets/assetsOurWeather/icones/dia/ensolarado.png");

    }
    catch {
        imgDay = require("../assets/assetsOurWeather/icones/dia/ensolarado.png");
    }

    if (day == "night") {
        return (
        <Image
            style={estilo.image}
            source={imgNight}
        />
        );
    } else {
        return (
        <Image
            style={estilo.image}
            source={imgDay}
        />
        );
    }
};