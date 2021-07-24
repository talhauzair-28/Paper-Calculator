import React from "react";
import { StyleSheet } from "react-native";

import dimens from "./dimens";

export default styles = StyleSheet.create({
  text_white_small: {
    color: "white",
    fontSize: dimens.textsize_small,
  },
  text_white_reg: {
    color: "white",
    fontSize: dimens.textsize_reg,
  },
  text_white_med: {
    flex: 1,
    color: "white",
    fontSize: dimens.textsize_med,
  },
  text_white_large: {
    color: "white",
    fontSize: dimens.textsize_large,
  },
});
