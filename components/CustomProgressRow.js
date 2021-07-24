import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import TextMontserrat from "./TextMontserrat";
import CustomSlider from "./CutomSlider";
import colors from "../constants/colors";
import dimens from "../constants/dimens";
import commonStyles from "../constants/commonStyles";
import TextInputMontserrat from "./TextInputMontserrat";

const CustomerProgressrow = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextMontserrat
          style={{ ...commonStyles.text_white_med, marginLeft: 20 }}
          textType="bold"
        >
          {props.title}
        </TextMontserrat>
        <View
          style={{
            ...styles.valueInputStyling,
            ...styles.itemValueSection,
          }}
        >
          <TextInputMontserrat
            style={commonStyles.text_white_reg}
            value={`${props.defaultVal ?? "00"}`}
            keyboardType="numeric"
            textType="regular"
          />
          <TextMontserrat
            style={commonStyles.text_white_reg}
            textType="regular"
          >
            {props.unit ?? "mm"}
          </TextMontserrat>
        </View>
      </View>
      <CustomSlider
        minVal={5}
        maxVal={400}
        value={props.defaultVal}
      ></CustomSlider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
  valueInputStyling: {
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 7,
    minWidth: 48,
    height: 30,
    backgroundColor: colors.dark_blue,
    borderRadius: dimens.tag_borderRadius,
    marginRight: 20,
  },
  itemValueSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomerProgressrow;
