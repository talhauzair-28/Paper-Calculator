//Native imports
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";

// 3rd Party imports
import { TagSelect } from "react-native-tag-select";
import Slider from "@react-native-community/slider";

// Custom imports
import Header from "./components/Header.js";
import ImageButton from "./components/ImageButton.js";
import SectionContainer from "./components/SectionContainer";
import TextMontserrat from "./components/TextMontserrat.js";
import TextInputMontserrat from "./components/TextInputMontserrat.js";
import colors from "./constants/colors.js";
import dimens from "./constants/dimens.js";
import images from "./constants/images.js";
import CustomerProgressRow from "./components/CustomProgressRow.js";
import commonStyles from "./constants/commonStyles.js";

const tagSelectionhandler = function (props) {};

const paperSizeData = [
  {
    paperSize: "A2",
  },
  {
    paperSize: "A3",
  },
  {
    paperSize: "A4",
  },
  {
    paperSize: "A5",
  },
  {
    paperSize: "DIN LANG",
  },
  {
    paperSize: "Custom",
  },
];

const tagsData = [
  { id: 1, label: "Money" },
  { id: 2, label: "Credit card" },
  { id: 3, label: "Debit card" },
  { id: 4, label: "Online payment" },
  { id: 5, label: "Bitcoin" },
  { id: 6, label: "Jazz Cash" },
  { id: 7, label: "Easy Paisa" },
  { id: 8, label: "E Wallet" },
  { id: 9, label: "Bank Transfer" },
];

export default function App() {
  const [sheetCount, setSheetCount] = useState(1);
  const [imageSource, setImageSource] = useState(images.sheet1);
  useEffect(() => {
    console.log("sheetCount is " + sheetCount);
    if (sheetCount <= 1) {
      setImageSource(images.sheet1);
    } else if (sheetCount >= 2 && sheetCount < 10) {
      setImageSource(images.sheet2);
    } else if (sheetCount >= 10 && sheetCount < 25) {
      setImageSource(images.sheet3);
    } else if (sheetCount >= 25 && sheetCount < 50) {
      setImageSource(images.sheet4);
    } else {
      setImageSource(images.sheet5);
    }
    return () => {
      //cleanup;
    };
  });

  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );

  let tagString = "Hello";
  return (
    <View style={styles.mainContainer}>
      <Header title="Paper Calculator"></Header>
      <ScrollView>
        <SectionContainer style={styles.topSection}>
          <View style={styles.paperCountContainer}>
            <Image style={styles.pagesImage} source={imageSource} />

            <View style={styles.paperEntrySection}>
              <SectionContainer style={styles.sheetCountBox}>
                <TextInputMontserrat
                  style={commonStyles.text_white_large}
                  textType="bold"
                  value={`${sheetCount}`}
                  keyboardType="numeric"
                  onChangeText={(text) => setSheetCount(text)}
                ></TextInputMontserrat>
                <TextMontserrat
                  style={commonStyles.text_white_small}
                  textType="regular"
                >
                  Sheets
                </TextMontserrat>
              </SectionContainer>

              <ImageButton
                style={styles.addButtonStyle}
                source={images.addIcon}
                onPress={increaseSheetCount}
              ></ImageButton>

              <ImageButton
                style={styles.minusButtonStyle}
                source={images.minusIcon}
                onPress={decreaseSheetCount}
              ></ImageButton>
            </View>
          </View>
          <SectionContainer style={styles.resultSection}>
            <TextMontserrat
              style={commonStyles.text_white_reg}
              textType="regular"
            >
              Per Copy
            </TextMontserrat>
            <TextMontserrat
              style={commonStyles.text_white_large}
              textType="bold"
            >
              4.99 g
            </TextMontserrat>
          </SectionContainer>
        </SectionContainer>
        <SectionContainer style={styles.midSection}>
          <View style={{ flex: 1, padding: 20 }}>
            <ScrollView>
              {/* Tags here */}
              <TagSelect
                data={tagsData}
                itemStyle={styles.tagItem}
                itemLabelStyle={styles.tagLabel}
                itemStyleSelected={styles.tagItemSelected}
                itemLabelStyleSelected={styles.tagLabelSelected}
                ref={(tag) => {
                  tagString = tag;
                }}
                onItemPress={() => {
                  tagString.itemsSelected.forEach((element) => {
                    console.log(element.label + ", " + element.id);
                  });
                }}
              />
            </ScrollView>
          </View>
          <SectionContainer style={styles.paperSizeSection}>
            <FlatList
              horizontal
              data={paperSizeData}
              style={{
                marginHorizontal: 14,
                flex: 1,
              }}
              renderItem={({ item: rowData }) => {
                return (
                  <TextMontserrat
                    style={styles.paperSizeRowItem}
                    textType="regular"
                  >
                    {`${rowData.paperSize}`}
                  </TextMontserrat>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </SectionContainer>
        </SectionContainer>
        <SectionContainer style={styles.bottomSection}>
          <CustomerProgressRow
            title="Lenght"
            defaultVal="80"
            unit="mm"
          ></CustomerProgressRow>

          <CustomerProgressRow
            title="Width"
            defaultVal="80"
            unit="mm"
          ></CustomerProgressRow>

          <CustomerProgressRow
            title="Grammage"
            defaultVal="80"
            unit="g"
          ></CustomerProgressRow>
        </SectionContainer>
      </ScrollView>
      {/* <View style={styles.topSection}>
        <Text>The worlds</Text>
        <Text>The world is yhoursssss</Text>
      </View> */}

      {
        /* <View style={{ padding: 50, innerHeight: 50, backgroundColor: "green" }}>
        <Text style={{ backgroundColor: "white" }}>"Paper Calculator 2"</Text>
      </View>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The Text has been changed")}
      />*/
        <StatusBar style="auto" />
      }
    </View>
  );

  /// functions

  function increaseSheetCount() {
    console.log("Pressed");
    if (sheetCount < 100) setSheetCount(sheetCount + 1);
  }

  function decreaseSheetCount() {
    console.log("!Pressed");
    if (sheetCount > 1) setSheetCount(sheetCount - 1);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    height: 229,
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
  },
  midSection: {
    height: 155,
    marginHorizontal: 20,
    backgroundColor: colors.background_gray,
  },
  bottomSection: {
    height: 276,
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: colors.primary_dark,
  },
  resultSection: {
    height: 60,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    paddingHorizontal: 20,
    flexDirection: "row", // direction is horizontal
    alignItems: "center", // cross direction (vertical here due to rows)
    justifyContent: "space-between",
    backgroundColor: colors.light_blue,
  },
  paperSizeSection: {
    flexDirection: "row",
    height: 45,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    alignItems: "center", // cross direction (vertical here due to rows)
    backgroundColor: colors.dark_gray,
  },
  paperCountContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sheetCountBox: {
    height: 74,
    width: 74,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(74, 81, 113, 0.2)",
    position: "absolute",
    padding: 0,
    // backgroundColor: `${getHexColorWithAlpha(colors.dark_blue, 0.2)}`,
  },
  pagesImage: {
    resizeMode: "cover",
    height: 116,
    width: 96,
    marginHorizontal: 20,
  },
  paperEntrySection: {
    height: 94,
    width: 74,
    flexDirection: "column",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButtonStyle: {
    height: 20,
    width: 20,
    zIndex: 999,
  },
  minusButtonStyle: {
    height: 20,
    width: 20,
    zIndex: 999,
  },
  paperSizeRowItem: {
    margin: 8,
    fontSize: dimens.textsize_reg,
    color: colors.papersize_text_color,
  },
  tagItem: {
    borderWidth: 0,
    borderRadius: dimens.tag_borderRadius,
    backgroundColor: "white",
    height: dimens.tag_height,
    justifyContent: "center",
    alignItems: "center",
  },
  tagLabel: {
    color: colors.papersize_text_color,
    backgroundColor: "transparent",
    borderWidth: 0,
    fontFamily: "Montserrat_400Regular",
    fontSize: dimens.textsize_reg,
  },
  tagItemSelected: {
    backgroundColor: colors.papersize_text_color,
    borderWidth: 0,
    borderRadius: dimens.tag_borderRadius,
    height: dimens.tag_height,
  },
  tagLabelSelected: {
    color: "#ffffff",
    backgroundColor: "transparent",
    borderWidth: 0,
    fontFamily: "Montserrat_400Regular",
    fontSize: dimens.textsize_reg,
  },
});

function getHexColorWithAlpha(color, alpha) {
  let mAlpha = (255 * alpha).toString(16);
  if (mAlpha.length < 2) mAlpha = "0" + mAlpha;
  const hexWithAlpha = color + mAlpha;
  return hexWithAlpha;
}
