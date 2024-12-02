import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import { CustomButton } from "../globalComponents/CustomButton";
// import { profile } from "./styles";
import {
  primaryAccentColor,
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../utils/colors";
import BrickLayout from "../globalComponents/BrickLayout";
import Post from "./components/Post";
import { useAuth } from "../../utils/Auth";

interface Furniture {
  id: string;
  imgURL: string;
  text: string;
}

const data: Furniture[] = [
  {
    id: "id123",
    imgURL:
      "https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-customer-enjoying-titled-books-outside-french-bookstore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: "Pioneer LHS Chaise Lounger in Grey Colour",
  },
  {
    id: "id124",
    imgURL:
      "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Precedant Furniture",
  },
  {
    id: "id125",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id126",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*",
    text: "Briget Accent Table",
  },
  {
    id: "id127",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id128",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id129",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id130",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*",
    text: "Hailey Sofa",
  },
  {
    id: "id131",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id132",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id133",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id134",
    imgURL:
      "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    text: "Chair and Table",
  },
  {
    id: "id223",
    imgURL:
      "https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg",
    text: "Pioneer LHS Chaise Lounger in Grey Colour",
  },
  {
    id: "id224",
    imgURL:
      "https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red",
    text: "Precedant Furniture",
  },
  {
    id: "id225",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id226",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*",
    text: "Briget Accent Table",
  },
  {
    id: "id227",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id228",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id229",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id230",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*",
    text: "Hailey Sofa",
  },
  {
    id: "id231",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id232",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id233",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id234",
    imgURL:
      "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    text: "Chair and Table",
  },
];

const ProfilePage = () => {
  const [postInterstToggle, setPostInterstToggle] = useState(true);
  const interests = ["Music", "Travel", "Sports", "Movies", "Games", "Reading"];

const {currentUser} = useAuth();





// id: res.data.data.id,
// username: res.data.data.username,
// nickName: res.data.data.nickName,
// email: res.data.data.email,
// avatar: res.data.data.avatar,

  return (
    <LoadingComponent loading={false} safeArea={true}>
      <ScrollView contentContainerStyle={profile.container}>
        <View style={profile.dp}>
          <Image
            source={{
              uri: currentUser?.avatar }}
            style={profile.dp}
          />
        </View>
        <View style={profile.basicDetails}>
          <View style={profile.usernameContainer}>
            <View>
              <Font style={profile.nickName} fontWeight={500}>
                {currentUser?.nickName}
              </Font>
              <Font style={profile.userName} fontWeight={400}>
                {currentUser?.username}
              </Font>
            </View>

            <CustomButton
              title="Following"
              fontWeight={500}
              style={profile.followButton}
              // action={}
            />
          </View>
          <Font fontWeight={500} style={profile.h4}>
            About
          </Font>
          <Font fontWeight={400} style={profile.bio}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            veritatis consequatur est blanditiis! At asperiores deleniti quia
            harum minus autem.
          </Font>
          <Font fontWeight={500} style={profile.h4}>
            Interests
          </Font>
          <View style={profile.interstContainer}>
            {interests.map((item, index) => (
              <Font key={index} fontWeight={400} style={profile.interst}>
                {item}
              </Font>
            ))}
          </View>
        </View>
        <View style={profile.postInterstContainerContainer}>
          <View style={profile.postInterstContainer}>
            <CustomButton
              title="Intersts"
              fontWeight={500}
              style={{
                paddingVertical: 7,
                paddingHorizontal: 20,

                fontSize: 14,
                color: postInterstToggle ? "white" : primaryTextColor,
                backgroundColor: postInterstToggle
                  ? primaryAccentColor
                  : secondaryBackgroundColor,
              }}
              action={() => setPostInterstToggle(true)}
            />
            <CustomButton
              title="Activities"
              fontWeight={500}
              style={{
                paddingVertical: 7,
                paddingHorizontal: 20,
                color: !postInterstToggle ? "white" : primaryTextColor,
                fontSize: 14,
                backgroundColor: !postInterstToggle
                  ? primaryAccentColor
                  : secondaryBackgroundColor,
              }}
              action={() => setPostInterstToggle(false)}
            />
          </View>
        </View>

        {/* {!postInterstToggle ?<View style={{flex:1}}>
<BrickLayout
      gap={5}
      images={data.map(x=>x.imgURL)}
      paddingHorizontal={20}
      rounded={10}
      />
</View>:null} */}

        {!postInterstToggle ? (
          <View style={profile.postContainer}>
            {data.map((item, index) => (
              <Post item={item} width={(width - 45) / 2} />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </LoadingComponent>
  );
};

export default ProfilePage;

const { width, height } = Dimensions.get("window");
const profile = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20, // Adding some space at the bottom if necessary
  },
  dp: {
    width: width,
    height: height * 0.5,
    resizeMode: "cover",
    borderRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  followButton: {
    // background: var(--primary-gradient);
    backgroundColor: primaryAccentColor,
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  basicDetails: {
    padding: 30,
    paddingBottom: 10,
  },
  usernameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nickName: { fontSize: 23 ,color:primaryTextColor},
  userName: { fontSize: 15, opacity: 0.6,color:primaryTextColor },
  h4: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
    ,color:primaryTextColor
  },
  bio: {
    fontSize: 14,
    opacity: 0.6
    ,color:primaryTextColor
  },
  interstContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  interst: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 3,
    marginBottom: 3,
    fontSize: 12
    ,color:primaryTextColor,
    backgroundColor: secondaryBackgroundColor,
  },
  postInterstContainerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  postInterstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden",
  },
  postInterstButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  postContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 5,
    justifyContent: "center",
  },
});
