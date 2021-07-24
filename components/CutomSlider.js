import React from "react";
import { StyleSheet } from "react-native";

import Slider from "@react-native-community/slider";

import colors from "../constants/colors";
import images from "../constants/images";

const CustomSlider = (props) => {
  return (
    <Slider
      style={{ ...styles.slider, ...props.style }}
      minimumValue={props.minVal ?? 1}
      maximumValue={props.maxVal ?? 300}
      minimumTrackTintColor={colors.primary}
      value={parseInt(props.value) ?? 0}
      thumbTintColor={colors.primary}
      thumbImage={images.progressThumb}
      maximumTrackTintColor={colors.dark_blue}
      step={props.step ?? 1}
      onValueChange={(value) => {
        console.log(value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: 40,
  },
});

export default CustomSlider;
