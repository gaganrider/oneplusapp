import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputGender, InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import Font from "../globalComponents/CustomFont";
const Gender = () => {
  const [gender, setGender] = useState("");
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>You Identify As...</Font>
        <Font style={initialSetup.paragraph}>
        Please share your gender. This helps us tailor your experience and
          connect you with relevant content.
        </Font>
       
        <InputGender value={gender} setValue={setGender} />
        {/* <InputText value={nickname} setValue={setNickname} placeholder="John Doe" maxLength={16} /> */}
        {gender != "" ? (
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

export default Gender;

// const styles = StyleSheet.create({})
