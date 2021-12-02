import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { getIcons } from "./NextHours";

interface dynamicBackgroundProps {
  currentTime: string;
  currentClimate: string;
}

export const DynamicBackground = (props: dynamicBackgroundProps) => {
  return (
    <View style={styles.container}>
      {getIcons(props.currentTime, props.currentClimate)}
      <Text style={styles.text}>São Paulo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
  },
});
