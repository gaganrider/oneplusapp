import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Font from "../../globalComponents/CustomFont";
import { CustomButton } from "../../globalComponents/CustomButton";
import ImageComponent from "../../globalComponents/CustomImage";
import { primaryTextColor, secondaryBackgroundColor } from "../../../utils/colors";
const Post = ({ item ,width}) => {
  const containerRef = useRef<View>(null);
 

  return (
    <View key={item?.id} style={styles.container} ref={containerRef}>
      <View style={styles.corosel}>
       
<ImageComponent url={item?.imgURL} width={width} />
        <LinearGradient colors={["#00000010", "#000"]} style={styles.overlay}>
          <Font style={styles.location} fontWeight={400}>
            <Entypo name="location-pin" size={13} color="white" />
            Chakki Chouraha,Tity Nagar Bhopal
          </Font>
          <Font style={styles.tyme} fontWeight={400}>
            <AntDesign name="calendar" size={11} color="white" /> Today,7:30pm
          </Font>
          <View style={styles.genderContainer}>
            <Text style={styles.genderm}>
              <Ionicons name="male" size={10} color="white" /> 3{" "}
            </Text>
            <Text style={styles.genderf}>
              <Ionicons name="female" size={10} color="white" /> 2{" "}
            </Text>
            <Text style={styles.gendero}>
              <Ionicons name="male-female" size={10} color="white" /> 0
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bottom}>
        {/* <View style={styles.dpContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1731335391637-d40ab43af839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.dp}
          />

          <View>
            <Font style={styles.username} fontWeight={500}>Username</Font>
            <Font style={styles.time}>7 Min Ago</Font>
          </View>
        </View>
        <View style={styles.icons} >
          <Fontisto name="share-a" size={18} color="black" />
          <Fontisto name="bookmark-alt" size={18} color="black" />
          <Fontisto name="bookmark" size={18} color="black" />
        </View>
       */}
      </View>
      <Font style={styles.discription} fontWeight={500}>
        {item?.text}
        
      </Font>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    // width: screenWidth,
    backgroundColor: secondaryBackgroundColor,
    borderRadius: 10,
    overflow: "hidden",
    // padding:12,
    flex: 1,
    // marginBottom:8
  },
  main: { width: "100%", height: 300, resizeMode: "cover" },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "cover",
  },
  dpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  corosel: {
    width: "100%",
    backgroundColor: "grey",
    position: "relative",
    marginBottom: 3,
    borderRadius: 7,
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 10,
    paddingRight: 40,
    // backgroundColor: "rgba(0,0,0,0.6)",
    height: "50%",
    width: "100%",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
  },
  location: { fontSize: 11, color: "white", lineHeight: 12 },
  tyme: { fontSize: 10, color: "white", lineHeight: 11 },
  bottom: {
    // padding: 15,
    // paddingBottom: 0,
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  username: { fontSize: 13 },
  time: { fontSize: 11, opacity: 0.8 },
  gender: { fontSize: 13, color: "white" },
  genderContainer: { display: "flex", flexDirection: "row", gap: 7 },
  genderm: {
    fontSize: 8,
    fontWeight: "bold",
    backgroundColor: "#4194F260",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
  },
  genderf: {
    fontSize: 8,
    fontWeight: "bold",
    backgroundColor: "#F241C660",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
  },
  gendero: {
    fontSize: 8,
    fontWeight: "bold",
    backgroundColor: "#9B69DB60",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  discription: {
    fontSize: 12,
    padding: 5
    ,color:primaryTextColor,
    // paddingTop: 5,
    opacity: 0.7,
  },
});
