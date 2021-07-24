import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import TextMontserrat from "./TextMontserrat";
import CustomSlider from "./CutomSlider";
import colors from "../constants/colors";
import dimens from "../constants/dimens";
import commonStyles from "../constants/commonStyles";
import TextInputMontserrat from "./TextInputMontserrat";

const CustomerProgressrow = (props) => {
  const [textValue, setTextValue] = useState(0);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextMontserrat
          style={{ ...commonStyles.text_white_med, marginLeft: 20, flex: 1 }}
          textType="bold"
        >
          {props.title}
        </TextMontserrat>
        <View style={styles.valueInputStyling}>
          <TextInputMontserrat
            style={{
              ...commonStyles.text_white_reg,
              textAlign: "right",
            }}
            value={`${textValue ?? "00"}`}
            keyboardType="numeric"
            textType="regular"
            onChangeText={(text) => {
              setTextValue(parseInt(text));
              props.onChangeText(parseInt(text));
            }}
          />
          <TextMontserrat
            style={{
              ...commonStyles.text_white_reg,
              marginLeft: 4,
              marginBottom: 3,
            }}
            textType="regular"
          >
            {props.unit ?? "mm"}
          </TextMontserrat>
        </View>
      </View>
      <CustomSlider
        minVal={1}
        maxVal={400}
        value={props.defaultVal}
        onValueChange={(value) => setTextValue(parseInt(value))}
        onProgressValueChange={props.onProgressValueChange}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 7,
    height: 30,
    backgroundColor: colors.dark_blue,
    borderRadius: dimens.tag_borderRadius,
    marginRight: 20,
  },
});

export default CustomerProgressrow;
