import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";

const AskSetup = () => {
  const [nickname, setNickname] = useState("");
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>Complete Setting Up Your Profile</Font>
        <Font style={initialSetup.paragraph}>
        Completing your profile helps us personalize your experience. Filling
        relevant fields increases your chances of connecting with others.
        </Font>
       
        <InputText
          value={nickname}
          setValue={setNickname}
          placeholder="John Doe"
          maxLength={16}
        />
        {nickname.length >= 3 ? (
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

export default AskSetup;

// const styles = StyleSheet.create({})
