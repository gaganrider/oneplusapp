import { StyleSheet, Text, View } from "react-native";
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
import { initialSetup } from "../styles";

interface Props {
    children: React.ReactNode;
}



export const Heading:React.FC<Props> = ({children}) => {
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
  let paddingVertical = 6;

  if (!fontsLoaded) {
    // return <AppLoading />;
  } else {
    return (
      <>
        <Text style={ {fontSize:35,fontFamily:'Poppins_700Bold'}  }>{children}</Text>
      </>
    );
  }
};



export const Paragraph:React.FC<Props> = ({children}) => {
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
    // let paddingVertical = 6;
  
    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // } else {
      return (
        <>
          <Text style={ {fontSize:15,fontFamily:'',opacity:0.6}  }>{children}</Text>
        </>
      );
    }
  // };
  





const styles = StyleSheet.create({});
