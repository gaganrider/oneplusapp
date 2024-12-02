import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  ScrollView,
} from "react-native";
import ImageComponent from "./CustomImage";

const { width: windowWidth, } = Dimensions.get("window");


interface photo {
    _id: string;
    publicId: string;
    url: string;
  }
  

interface Props {   
  images?: photo[];
  width?:number
}


const slideList = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i,
    url: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

function Slide({ data ,width}) {
//   home explore chat notification create profile
  return (
    <View
      style={{
        // height: ((windowWidth - 54) * 3) / 4,
        // width: windowWidth - 54,
        width:width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <ImageComponent url={data.url} width={width}/>
      
    </View>
  );
}

const Carousel:React.FC<Props>=({images,width=windowWidth})=> {
    
  return (
    <FlatList
      data={images}
      // data={slideList}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} width={width} />;
      }}
      pagingEnabled
      horizontal
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
}


export default  Carousel;

