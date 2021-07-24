import React from "react";
import { Text, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

const TextMontserrat = (props) => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    console.log("fonts were not loaded");
    return <AppLoading />;
  }

  let fontFamily = "Montserrat_400Regular";

  switch (props.textType.toLowerCase()) {
    case "light":
      fontFamily = "Montserrat_300Light";
      break;
    case "light | italic":
      fontFamily = "Montserrat_300Light_Italic";
      break;
    case "bold":
      fontFamily = "Montserrat_700Bold";
      break;
    case "bold | italic":
      fontFamily = "Montserrat_700Bold_Italic";
      break;
    case "regular":
      fontFamily = "Montserrat_400Regular";
      break;
    case "italic":
      fontFamily = "Montserrat_400Regular_Italic";
      break;
    default:
      fontFamily = "Montserrat_400Regular";
  }

  return (
    <Text style={{ ...props.style, fontFamily: fontFamily }}>
      {props.children}
    </Text>
  );
};

const style = StyleSheet.create({});
export default TextMontserrat;
