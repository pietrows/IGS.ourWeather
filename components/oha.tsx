import { BottomTabView } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IDayDegrees } from "../services/interfaces/WeatherService";


interface dayDegreesProps {
  daysDegrees: IDayDegrees[];
}

export const OHA = (props: dayDegreesProps) => {
  const data = props.daysDegrees
  return (
    <View style={style.container}>
      {data.map((item) => {
      return (
        <View style={style.containerPai}>
          <Text style={style.containerfilho}>{item.day}</Text>
          <Text style={style.containerfilho}>{item.minDegress}/{item.maxDegrees}</Text>
        </View>
      )})}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 109,
    left: 0,
    right: 0
  },
  containerPai: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  containerfilho: {
    fontSize:20,
    color: 'white',
  }
})
;

