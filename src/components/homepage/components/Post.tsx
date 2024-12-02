import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Carousel from "../../globalComponents/Corosel";
import Font from "../../globalComponents/CustomFont";
import { CustomButton } from "../../globalComponents/CustomButton";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import {
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../../utils/colors";
const { width: windowWidth } = Dimensions.get("window");
interface photo {
  _id: string;
  publicId: string;
  url: string;
}

interface Props {
  item: any;
  urls: any;
  username: string;
  nickname: string;
  userid: string;
  caption: string;
  openForall: boolean;
  postId: string;
  avatar: string;
  width?: number;
  messagebox?:boolean;
}
const Post: React.FC<Props> = ({
  item,
  urls,
  avatar,
  username,
  caption,
  userid,
  postId,
  openForall,
  width = windowWidth,
  messagebox
}) => {
  const containerRef = useRef<View>(null);
  return (
    <View style={styles.container} ref={containerRef}>
      <View style={styles.corosel}>
        <Carousel images={urls} width={width - 24} />

        <LinearGradient
          colors={["#00000000", "#00000060", "#000"]}
          style={styles.overlay}
        >
          <Font style={styles.location} fontWeight={500}>
            <Entypo name="location-pin" size={15} color="white" />
            Chakki Chouraha,Bhopal
          </Font>
          <Font style={styles.tyme} fontWeight={500}>
            <AntDesign name="calendar" size={13} color="white" /> Today,7:30pm
          </Font>
          <View style={styles.genderContainer}>
            <Text style={styles.genderm}>
              <Ionicons name="male" size={12} color="white" /> 3{" "}
            </Text>
            <Text style={styles.genderf}>
              <Ionicons name="female" size={12} color="white" /> 2{" "}
            </Text>
            <Text style={styles.gendero}>
              <Ionicons name="male-female" size={12} color="white" /> 0
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bottom}>
        <View style={styles.dpContainer}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.dp}
          />

          <View>
            <Font style={styles.username} fontWeight={500}>
              {username}
            </Font>
            <Font style={styles.time}>7 Min Ago</Font>
          </View>
        </View>
        <View style={styles.icons}>
          {/* <CustomButton title="share" /> */}
          <Fontisto name="share-a" size={18} color={primaryTextColor} />
          {/* <Fontisto name="bookmark-alt" size={18} color="black" /> */}
          <Fontisto name="bookmark" size={18} color={primaryTextColor} />
        </View>
      </View>
      <Font style={styles.discription}>{caption}</Font>


{messagebox? <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "lightgrey",
          borderBottomWidth: 1,
          padding: 5,
        }}
      >
        <TextInput
          // style={styles.comment}
          style={{
            fontSize: 16,

            width: "90%",
            color: "grey",
            maxHeight: 100,
          }}
          placeholder="Send Message..."
          placeholderTextColor="grey"
          maxLength={100}
          multiline={true}
        />
        <Feather name="send" size={18} color="black" />
      </View>:null}

     
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: secondaryBackgroundColor,
    borderRadius: 20,
    overflow: "hidden",
    padding: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
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
    borderRadius: 10,
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 10,
    paddingRight: 40,
    height: "40%",
    width: "100%",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "flex-end",
  },
  location: { fontSize: 12, color: "white" },
  tyme: { fontSize: 11, color: "white" },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  username: { fontSize: 13, color: primaryTextColor },
  time: { fontSize: 11, opacity: 0.8, color: primaryTextColor },
  gender: { fontSize: 13, color: "white" },
  genderContainer: { display: "flex", flexDirection: "row", gap: 7 },
  genderm: {
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#4194F260",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
  },
  genderf: {
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#F241C660",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
  },
  gendero: {
    fontSize: 10,
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
    gap: 10,
    alignItems: "center",
    color: primaryTextColor,
  },
  discription: {
    fontSize: 13,
    opacity: 0.7,
    color: primaryTextColor,
  },
});
