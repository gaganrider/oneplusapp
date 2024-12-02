import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";

const Username = () => {
  const [username, setUsername] = useState("");
  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
        <Heading>
          Celebrate your uniqueness with a username as special as you are.
        </Heading>
        <Paragraph>
          Choose a unique username so people can find you easily and connect
          with you effortlessly. It’s your personal touch in our community.
        </Paragraph>
        <InputText
          value={username}
          setValue={setUsername}
          placeholder="Username"
          maxLength={16}
        />
        {username.length >= 8 ? (
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

export default Username;

// const styles = StyleSheet.create({})
