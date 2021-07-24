import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import ImageButton from "../components/ImageButton";
import images from "../constants/images.js";
import TextMontserrat from "./TextMontserrat";

const Header = (props) => {
  return (
    <View style={style.container}>
      <TextMontserrat style={style.title} textType="bold">
        {props.title}
      </TextMontserrat>
      <ImageButton style={style.menuIcon} source={images.menuIcon} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 102,
    width: "100%",
    flexDirection: "row",
    padding: 20,
    paddingTop: 44 + 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  menuIcon: {
    height: 12,
    width: 20,
  },
});

export default Header;
