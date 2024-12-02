import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import Post from "./components/Post";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  primaryAccentColor,
  primaryBackgroundColor,
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../utils/colors";
import ImageComponent from "../globalComponents/CustomImage";
import CustomHeader from "../globalComponents/CustomHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import { fetchPosts } from "../../services/post";

import { useAuth } from "../../utils/Auth";
import { useNavigation } from "@react-navigation/native";
const { width: windowWidth } = Dimensions.get("window");
//   import { Drawer } from 'react-native-drawer-layout';
interface User {
  username: string;
  nickName: string;
  avatar: string;
  _id: string;
}

interface Image {
  name: string; // Adjust this according to your data structure
  url: string;
}

interface Posts {
  images: Image[];
  postedBy: User;
  caption: string;
  openForall: boolean;
  _id: string;
}

const Homepage = () => {
  const [header, setHeader] = useState(true);
  const lastScrollPosition = useRef(0);
  const [sidebar, setSidebar] = React.useState(false);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [posts, setPosts] = useState<Posts[]>([]);
  const translateY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { currentUser } = useAuth();
  const handleScroll = (event: any) => {
    const currentScrollPosition = event.nativeEvent.contentOffset.y;

    // Determine direction
    if (
      currentScrollPosition > lastScrollPosition.current &&
      currentScrollPosition > 500
    ) {
      setHeader(false);
    } else if (currentScrollPosition < lastScrollPosition.current) {
      setHeader(true);
    }

    // Update last scroll position
    lastScrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: header ? 0 : -100, // Show or hide the header
      duration: 200, // 200ms for the transition
      useNativeDriver: true, // Optimize performance
    }).start();
  }, [header]);

  useEffect(() => {
    setLoading(true);
    fetchPosts().then((res) => {
      const allPosts = [...posts, ...res?.data.data];
      setPosts(allPosts);
      setLoading(false);
      console.log("res.data.data");
    });
  }, [currentUser?.id]);

  const dummyPosts = [
    { id: "1", caption: "Post 1", images: ["Image 1-1", "Image 1-2"] },
    { id: "2", caption: "Post 2", images: ["Image 2-1", "Image 2-2"] },
    { id: "3", caption: "Post 3", images: ["Image 3-1"] },
    { id: "4", caption: "Post 4", images: ["Image 4-1", "Image 4-2", "Image 4-3"] },
  ];




  const openPost = (index: number) => {
    navigation.navigate("postcarosel", { posts: posts, initialIndex: index });
  };
 

  

  return (
    <View style={{ borderRightColor:primaryBackgroundColor,paddingBottom:10 }}>
      <CustomHeader>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <AntDesign
            name="menu-fold"
            size={22}
            color={primaryTextColor}
            onPress={() => setSidebar(true)}
          />
          <Font
            fontWeight={700}
            style={{
              marginLeft: 10,
              fontSize: 25,
              textAlign: "left",
              color: primaryAccentColor,
            }}
          >
            Blunt
          </Font>
        </View>
      </CustomHeader>
     
    <LoadingComponent loading={loading} safeArea={false} sideBar={sidebar}>

      {/* <FlatList
      data={dummyPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity  onPress={() => openPost(index)}>
          <View>
            <Text>{item.caption}</Text>
          </View>
        </TouchableOpacity>
      )}
    /> */}


{posts.length ? (
        <FlatList
       
          data={posts} // Data for FlatList
          keyExtractor={(item) => item._id} // Unique key for each item
          renderItem={({ item, index }) => (
            <TouchableOpacity  onPress={() => openPost(index)}>
             <Post
        item={item}
        urls={item.images}
        username={item.postedBy.username}
        nickname={item.postedBy.nickName}
        userid={item.postedBy._id}
        caption={item.caption}
        openForall={item.openForall}
        postId={item._id}
        avatar={item.postedBy.avatar}
        width={windowWidth-30}
        // Pass the necessary props here
      />
            </TouchableOpacity>
          )}
          style={styles.feedmain} // Style for FlatList
          // onScroll={handleScroll} // Scroll handler
          scrollEventThrottle={16} // Limit scroll event frequency
          contentContainerStyle={{ paddingBottom: 20 }} // Optional padding at the bottom
         
        />
      ) : null}



      {/* {posts.length ? (
        <FlatList<Posts>
          data={posts} // Data for FlatList
          keyExtractor={(item) => item._id} // Unique key for each item
          renderItem={renderPost}
          style={styles.feedmain} // Style for FlatList
          // onScroll={handleScroll} // Scroll handler
          scrollEventThrottle={16} // Limit scroll event frequency
          contentContainerStyle={{ paddingBottom: 20 }} // Optional padding at the bottom
        />
      ) : null} */}
    </LoadingComponent>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: primaryBackgroundColor,
    color: primaryTextColor,
    paddingVertical: 5,
    width: "100%",
    zIndex: 5,
  },
  feedmain: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor:primaryBackgroundColor
  },
});
