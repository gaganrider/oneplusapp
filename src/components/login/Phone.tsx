import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";
import { useNavigation } from "@react-navigation/native";

const Phone = () => {

  const [phone, setPhone] = useState("");

  const navigation =useNavigation()
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
        <Font style={initialSetup.heading} fontWeight={700}>Can we have Your Number? Asking for a friend..</Font>
        <Font style={initialSetup.paragraph}>
        Just kidding, we need your number to log you in. Don’t worry, we’re
        not calling.
        </Font>
        
        <InputText
          value={phone}
          setValue={setPhone}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          maxLength={10}
        />

        {phone.length == 10 ? (
          <CustomButton
            fontWeight={500}
            style={initialSetup.button}
            title="Confirm"
            // action={}
          />
        ) : null}
      </View>
    </LoadingComponent>
  );
};

export default Phone;

// const styles = StyleSheet.create({})
