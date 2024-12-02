import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";
const Nickname = () => {
  const [nickname, setNickname] = useState("");
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>What should we call you..?</Font>
        <Font style={initialSetup.paragraph}>
        Please share your name so we can address you properly and personalize
        your experience.
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

export default Nickname;

// const styles = StyleSheet.create({})
