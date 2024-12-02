import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  TextInput,
} from "react-native";
// import {
//   useFonts,
//   Poppins_100Thin,
//   Poppins_100Thin_Italic,
//   Poppins_200ExtraLight,
//   Poppins_200ExtraLight_Italic,
//   Poppins_300Light,
//   Poppins_300Light_Italic,
//   Poppins_400Regular,
//   Poppins_400Regular_Italic,
//   Poppins_500Medium,
//   Poppins_500Medium_Italic,
//   Poppins_600SemiBold,
//   Poppins_600SemiBold_Italic,
//   Poppins_700Bold,
//   Poppins_700Bold_Italic,
//   Poppins_800ExtraBold,
//   Poppins_800ExtraBold_Italic,
//   Poppins_900Black,
//   Poppins_900Black_Italic,
// } from "@expo-google-fonts/poppins";
// import AppLoading from "expo-app-loading";






import { initialSetup } from "../styles";
import { useRef, useState } from "react";
import {
  primaryAccentColor,
  secondaryBackgroundColor,
} from "../../../utils/colors";
// import { LinearGradient } from "expo-linear-gradient";

interface InputProps extends TextInputProps {
  value?: string;
  setValue: (value: string) => void;
  //   placeholder: string;
  //   numpad?: boolean;
  //   maxLength?: number;
}

export const InputText: React.FC<InputProps> = ({
  value,
  setValue,
  ...props
  //   placeholder,
  //   maxLength,
  //   numpad,
}) => {
  // let [fontsLoaded] = useFonts({
  //   Poppins_100Thin,
  //   Poppins_100Thin_Italic,
  //   Poppins_200ExtraLight,
  //   Poppins_200ExtraLight_Italic,
  //   Poppins_300Light,
  //   Poppins_300Light_Italic,
  //   Poppins_400Regular,
  //   Poppins_400Regular_Italic,
  //   Poppins_500Medium,
  //   Poppins_500Medium_Italic,
  //   Poppins_600SemiBold,
  //   Poppins_600SemiBold_Italic,
  //   Poppins_700Bold,
  //   Poppins_700Bold_Italic,
  //   Poppins_800ExtraBold,
  //   Poppins_800ExtraBold_Italic,
  //   Poppins_900Black,
  //   Poppins_900Black_Italic,
  // });

 



  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      <>
        <TextInput
          {...props}
          multiline={false}
          numberOfLines={1}
          style={InputTextStyle.input}
          //   placeholder={placeholder}
          //   keyboardType={numpad ? "phone-pad" : "default"}
          //   maxLength={maxLength}
          onChangeText={setValue}
          value={value}
        />
      </>
    );
  }
// };

export const InputGender: React.FC<InputProps> = ({ value, setValue }) => {
  return (
    <View style={genderStyle.container}>
      <Text style={genderStyle.text1} onPress={() => setValue("male")}>
        Male {value === "male" ? "✔️" : null}
      </Text>
      <Text style={genderStyle.text2} onPress={() => setValue("female")}>
        Female {value === "female" ? "✔️" : null}
      </Text>

      {/* <LinearGradient
        colors={[
          "#FF0018a3",
          "#FFA52Ca3",
          "#FFFF41a3",
          "#008018a3",
          "#0000F9a3",
          "#86007Da3",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 70 }}
      >
        <Text style={genderStyle.text3} onPress={() => setValue("other")}>
          Other {value === "other" ? "✔️" : null}
        </Text>
      </LinearGradient> */}
    </View>
  );
};

export const InputOtp: React.FC<InputProps> = ({ setValue }) => {
  const [otp, setOtp] = useState<string[]>(["0", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setValue(newOtp.join(""));
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={OtpStyle.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          multiline={false}
          numberOfLines={1}
          style={OtpStyle.input}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </View>
  );
};

const InputTextStyle = StyleSheet.create({
  input: {
    // fontFamily:'Poppins_400Regular',
    fontFamily: "regular",
    // fontWeight:'600',
    fontSize: 28,
    backgroundColor: secondaryBackgroundColor,
    borderColor: "gray",
    //   borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingTop:3,
    marginTop: 60,
    // textAlign: "center",
  },
});

const genderStyle = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text1: {
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 60,
    textAlign: "center",
    padding: 13,
  },
  text2: {
    fontSize: 20,
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 60,
    textAlign: "center",
    padding: 13,
    marginVertical: 20,
  },
  text3: {
    // background:
    //       "linear-gradient(to right,#FF0018a3,#FFA52Ca3,#FFFF41a3,#008018a3,#0000F9a3,#86007Da3)",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 60,
    textAlign: "center",
    padding: 13,
  },
});

const OtpStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
    marginBottom:15
  },

  input: {
    // fontFamily:'Poppins_400Regular',
    fontFamily: "regular",
    // fontWeight:'600',
    fontSize: 32,
    backgroundColor: secondaryBackgroundColor,
    borderColor: primaryAccentColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 60,
    textAlign: "center",
  },
});
