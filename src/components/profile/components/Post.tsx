import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Font from "../../globalComponents/CustomFont";
const Post = ({ item, width }) => {

  return (
    <View key={item?.id} style={[styles.container, { width: width ,height:(width * 6) /5 }]}>
      
        <Image
          source={{
            uri: item?.imgURL,
          }}
          style={{ width: width, height: (width * 6) / 5, borderRadius: 10 }}
          resizeMode="cover"
        />
        <LinearGradient colors={["#00000000", "#000"]} style={styles.overlay}>
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
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    // width: screenWidth,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
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
    height: "50%",
    width: "100%",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
  },
  location: { fontSize: 11, color: "white", },
  tyme: { fontSize: 10, color: "white", },
  bottom: {
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
  discription: {
    fontSize: 12,
    padding: 5,
    display:'none',
    opacity: 0.7,
  },
});
