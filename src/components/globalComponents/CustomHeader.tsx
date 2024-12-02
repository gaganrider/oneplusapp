import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  primaryBackgroundColor,
  secondaryBackgroundColor,
} from "../../utils/colors";
interface Props {
  children: React.ReactNode;
  style?: any;
}
const CustomHeader: React.FC<Props> = ({ children, style = {} }) => {
  return (
    <SafeAreaView
      style={[
        {
          shadowColor: "#000",
          backgroundColor: primaryBackgroundColor,
          shadowOffset: { width: 0, height: 0 }, // Negative height for shadow below
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 4,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
