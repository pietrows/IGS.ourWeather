import { declareClass } from "@babel/types";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// const showclimates = (data)=>{for(var i = 0; i < 2; i++){
//     return data.climates[i].hour
// }}
export function NextHours() {
  const data = {
    climates: [
      {
        hour: "18:00",
        value: "Ensolarado",
      },
      {
        hour: "19:00",
        value: "Nublado",
      },
    ],
    compoundHumidity: "7%",
    humidity: 72,
  };
  return (
    <View style={estilo.container}>
      {data.climates.map((item) => {
        return (
          <View style={estilo.clima}>
            <View>{getIcons("day", item.value.toLowerCase())}</View>
            <Text style={estilo.text}>{item.value}</Text>
            <Text style={estilo.text}>{item.hour}</Text>
          </View>
        );
      })}

      <View style={estilo.clima}>
        <View>
          <Image
            style={estilo.image}
            source={require("../assets/assetsOurWeather/icones/gota.png")}
          />
        </View>
        <Text style={estilo.gota}>{data.compoundHumidity}</Text>
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1F253F",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
  },
  clima: {
    flexDirection: "column",
    flex: 1,
  },
  text: {
    fontSize: 25,
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
    fontSize: 30,
  },
  gotaImage: {
    height: 46,
    width: 32,
  },
});

const getIcons = (day: string, climate: string) => {
  if (day == "night") {
    return (
      <Image
        style={estilo.image}
        source={require("../assets/assetsOurWeather/icones/noite/" +
          climate +
          ".png")}
      />
    );
  } else {
    return (
      <Image
        style={estilo.image}
        source={require("../assets/assetsOurWeather/icones/dia/" +
          climate +
          ".png")}
      />
    );
  }
};
