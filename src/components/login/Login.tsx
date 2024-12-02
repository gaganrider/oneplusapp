import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import { initialSetup } from "./styles";
import { Heading, Paragraph } from "./components/Text";
import { InputGender, InputText } from "./components/Inputs";
import { CustomButton } from "../globalComponents/CustomButton";
import { loginUser } from "../../services/user";
import { useAuth } from "../../utils/Auth";
import axios from "axios";
import Font from "../globalComponents/CustomFont";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const [email, setEmail] = useState("");

  const setObjectValue = async (value:object) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('currentUser', jsonValue)
    } catch(e) {
      // save error
    }
  
    console.log('Done.')
  }



  const { login } = useAuth();
  const handlelogin = () => {
    axios.post("http://localhost:4000/api/user/change-avatar")
    loginUser({
      email,
      password: "e.currentTarget.password.value",
    })
      .then((res) => {

        
        console.log(res.data);
        login(res.data.data.token, {
          id: res.data.data.id,
          username: res.data.data.username,
          nickName: res.data.data.nickName,
          email: res.data.data.email,
          avatar: res.data.data.avatar,
        });

        setObjectValue({
          id: res.data.data.id,
          username: res.data.data.username,
          nickName: res.data.data.nickName,
          email: res.data.data.email,
          avatar: res.data.data.avatar,
        })
        
        
      })
      .catch((err) => console.log(err));
  };

  const temp = () => {
    axios.get("https://dummyjson.com/test").then((res) => console.log(res));
  };

  return (
    <LoadingComponent loading={false}>
      <View style={initialSetup.container}>
      <Font style={initialSetup.heading} fontWeight={700}>login to Your account</Font>
        

        <InputText
          value={email}
          setValue={setEmail}
          placeholder="Email"
          // value={'deepika.joshi@example.com'}
          // maxLength={16}
        />
        <CustomButton
          fontWeight={500}
          style={initialSetup.button}
          title="Confirm"
          action={handlelogin}
        />
      </View>
    </LoadingComponent>
  );
};

export default Login;

// const styles = StyleSheet.create({})
