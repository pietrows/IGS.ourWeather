import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
interface currentTemperatureProps {
  currentTemperature?: String;
}
export const CurrentTemperature = (props: currentTemperatureProps) => {
  return (
    <View style={Styles.CurrentTemperatureStyled}>
      <Text style={Styles.ShowTemperature}>{props.currentTemperature}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  CurrentTemperatureStyled: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    borderStyle: "solid",
    fontSize: 17,
    alignSelf: "center",
    backgroundColor: "#d3cccc",
    paddingRight: 12,
    paddingLeft: 15,
    paddingVertical: 2,
    marginTop: 10,
  },
  ShowTemperature: {
    color: "black",
    fontSize: 54,
  },
});
