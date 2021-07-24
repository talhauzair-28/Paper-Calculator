import React from "react";
import { StyleSheet } from "react-native";

import Slider from "@react-native-community/slider";

import colors from "../constants/colors";
import images from "../constants/images";

const CustomSlider = (props) => {
  return (
    <Slider
      style={{ ...styles.slider, ...props.style }}
      step={props.step ?? 1}
      minimumValue={props.minVal ?? 1}
      maximumValue={props.maxVal ?? 300}
      value={parseInt(props.value) ?? 0}
      minimumTrackTintColor={colors.primary}
      maximumTrackTintColor={colors.dark_blue}
      thumbTintColor={colors.primary}
      thumbImage={images.progressThumb}
      onValueChange={props.onValueChange}
      onSlidingComplete={props.onProgressValueChange}
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
