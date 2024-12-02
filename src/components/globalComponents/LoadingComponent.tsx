import { Animated, StyleSheet, Text, View ,Dimensions} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { primaryBackgroundColor } from "../../utils/colors";
import Font from "./CustomFont";


const { width, height } = Dimensions.get("window");
interface Props {
  children: React.ReactNode;
  loading: boolean;
  safeArea?: boolean;
  sideBar?: boolean;
}
const LoadingComponent: React.FC<Props> = ({ children, loading, safeArea,sideBar }) => {
  if (safeArea) {
    return (
      <SafeAreaView
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: primaryBackgroundColor,
        }}
      >
        {!loading ? children : <Text>loading</Text>}
        {/* <View style={{position: 'absolute', bottom: 10, width: '100%',backgroundColor:'red',zIndex:100}}>
            <Font>jjjj </Font>
        </View> */}
      </SafeAreaView>
    );
  } else {
    return (
      <>
        {!loading ? (
          <>
            {children}
            <Animated.View
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "#00000040",
                zIndex: 100,
                height: "100%",
                transform: [{ translateX: sideBar?0:- width }],
              }}
            >
              <SafeAreaView
                style={{
                  width: "75%",
                  height: "100%",
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <Font>
                  jjjjhh Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Praesentium eum, totam consectetur officiis quo deserunt
                  harum, quisquam animi possimus expedita ut aliquid tempore
                  accusantium nisi nostrum eligendi! Enim maiores a nihil, hic
                  itaque mollitia quasi at quibusdam recusandae esse laboriosam.{" "}
                </Font>
              </SafeAreaView>
            </Animated.View>
          </>
        ) : (
          <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
<Font fontWeight={500} style={{fontSize:15}}>Loading</Font>
          </View>
          
        )}
      </>
    );
  }
};

export default LoadingComponent;

const styles = StyleSheet.create({});
