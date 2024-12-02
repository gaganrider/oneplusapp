import {
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  Text,
  View,
} from "react-native";
import React from "react";
import { Alert } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
// import AppLoading from "expo-app-loading";

interface Props {
  title: string;
  prompt?: boolean;
  promptText?: string;
  fontWeight?: number;
  style?: TextStyle;
  action?: () => void;
}

export const CustomButton: React.FC<Props> = ({
  fontWeight = 400,
  title,
  prompt,
  promptText,
  action,
  style = {},
  ...props
}) => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return "";
  }

  const fontFamilyMap: { [key: number]: string } = {
    100: "Poppins_100Thin",
    200: "Poppins_200ExtraLight",
    300: "Poppins_300Light",
    400: "Poppins_400Regular",
    500: "Poppins_500Medium",
    600: "Poppins_600SemiBold",
    700: "Poppins_700Bold",
    800: "Poppins_800ExtraBold",
    900: "Poppins_900Black",
  };

  const fontFamily = fontFamilyMap[fontWeight] || "Poppins_400Regular";
  const clickaHandle = () => {
    if (prompt) {
      return Alert.alert(
        "Confirm Action",
        // "Are you sure you want to proceed?",
        promptText,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: action,
          },
        ],
        { cancelable: false }
      );
    } else if(action) {
      return action();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={clickaHandle}>
        <Text style={[{fontFamily }, style]} {...props}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
