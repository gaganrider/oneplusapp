import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { Heading, Paragraph } from "./components/Text";
import { initialSetup } from "./styles";
import { InputOtp } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";

const Otp = () => {
  const [otp, setOtp] = useState("");
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>Verify Your Number</Font>
        <Font style={initialSetup.paragraph}>
        OTP has been sent to your number
        </Font>
        <Font>8982189283</Font>
        
        <InputOtp setValue={setOtp} />
        {otp.length == 4 ? (
          <CustomButton
            fontWeight={500}
            style={initialSetup.button}
            title="Confirm"
          />
        ) : null}
      </View>
    </LoadingComponent>
  );
};

export default Otp;

const styles = StyleSheet.create({});
