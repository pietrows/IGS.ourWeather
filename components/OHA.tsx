import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export const OHA = () => {
  return (
    <>
      <View style={StylesTeste.containerPai}>
        <View style={StylesTeste.containerFilho}>
          <Text style={StylesTeste.textStyled}>ontem</Text>
          <Text style={StylesTeste.textStyled}>21º/36º</Text>
        </View>
        <View style={StylesTeste.containerFilho}>
          <Text style={StylesTeste.textStyled}>hoje</Text>
          <Text style={StylesTeste.textStyled}>21º/36º</Text>
        </View>
        <View style={StylesTeste.containerFilho}>
          <Text style={StylesTeste.textStyled}>amanhã</Text>
          <Text style={StylesTeste.textStyled}>21º/36º</Text>
        </View>
      </View>
    </>
  );
};

const StylesTeste = StyleSheet.create({
  containerPai: {
    backgroundColor: "none",
  },
  containerFilho: {
    backgroundColor: "none",
  },
  textStyled: {
    color: "black",
  },
});
