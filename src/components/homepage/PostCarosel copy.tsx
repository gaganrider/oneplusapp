import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  FlatList,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
// import ImageComponent from "../globalComponents/CustomImage";
import Carousel from "../globalComponents/Corosel";
import LoadingComponent from "../globalComponents/LoadingComponent";
import Font from "../globalComponents/CustomFont";
import Fontisto from "@expo/vector-icons/Fontisto";
import {
  primaryBackgroundColor,
  primaryTextColor,
  secondaryBackgroundColor,
} from "../../utils/colors";
import Post from "./components/Post";

const { width, height } = Dimensions.get("window");

interface PostType {
  id: string;
  caption: string;
  images: string[];
}

interface Props {
  route: {
    params: {
      posts: PostType[];
      initialIndex: number;
    };
  };
}

const PostCarosel: React.FC<Props> = ({ route }) => {
  const { posts, initialIndex } = route.params;
  const horizontalScrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollTo({
        x: initialIndex * width,
        animated: false,
      });
    }
  }, [initialIndex]);

  const renderPost = (item: PostType) => (
    <LoadingComponent loading={false} safeArea={true}>
      <View style={styles.postContainer} key={item.id}>
        <ScrollView showsVerticalScrollIndicator={false}style={{backgroundColor:primaryBackgroundColor}} >
          {/* <Carousel images={post.images} width={width - 20} /> */}

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
        // Pass the necessary props here
      />
          
       
        
        </ScrollView>
      </View>
    </LoadingComponent>
  );

  return (
    <ScrollView
      ref={horizontalScrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor:primaryBackgroundColor}}
    >
      {posts.map((item) => renderPost(item))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width,
    height,
    // padding: 10,
    backgroundColor: "#f9f9f9",
  },
  caption: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  slideContainer: {
    width: width - 40,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});

export default PostCarosel;
