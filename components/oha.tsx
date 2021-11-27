import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface DayDegree {
  day: string;
  max: string;
  min: string;
}

interface DayDegreesProps extends Array<DayDegree> {}

export function OHA(props: DayDegreesProps) {
  return (
    <View style={StylesTeste.ContainerPai}>
      {props.map((item) => {
        <View styles={StylesTeste.ContainerPai}>
          <Text style={StylesTeste.textStyled}>{item.day}</Text>
          <Text style={StylesTeste.textStyled}>
            {item.min}/{item.max}
          </Text>
        </View>;
        <View styles={StylesTeste.ContainerFilho}>
          <Text style={StylesTeste.textStyled}>{item.day}</Text>
          <Text style={StylesTeste.textStyled}>
            {item.min}/{item.max}
          </Text>
        </View>;
        <View styles={StylesTeste.ContainerFilho}>
          <Text style={StylesTeste.textStyled}>{item.day}</Text>
          <Text style={StylesTeste.textStyled}>
            {item.min}/{item.max}
          </Text>
        </View>;
      })}
    </View>
  );
}

const StylesTeste = StyleSheet.create({
  containerPai: {
    backgroundColor:"d3cccc",
    display: "flex",
    justifyContent: "space-between",
    fontsize:25,
  },
  containerFilho: {
    display: "flex",
    justifyContent: "space-between",
    fontsize:25,
    paddinRight:12,
    paddinLeft: 12,
  },
  textStyled: {
    fontsize:25,
    
  }

})
;

