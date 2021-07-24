import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SectionContainer = (props) => {
  return (
    <View style={{ ...style.container, ...props.style }}>{props.children}</View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0,
  },
});

export default SectionContainer;
