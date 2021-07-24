import React from "react";
import { Image, TouchableOpacity, StyleSheet, useState } from "react-native";

const ImageButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <Image
        source={props.source}
        style={{ ...style.imageStyle, ...props.style }}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    height: 20,
    width: 20,
  },
});

export default ImageButton;
