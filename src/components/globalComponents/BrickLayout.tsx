import React, { useState, useEffect, useRef, useCallback } from "react";
import { ScrollView, View, StyleSheet, Dimensions, Image } from "react-native";
import ImageComponent from "../globalComponents/CustomImage";

interface Props {
  images: string[];
  gap?: number;
  Component?: React.ElementType; // Updated to React.ElementType for dynamic components
  paddingHorizontal?: number;
  data?: any[];
  rounded?:number;
}

const BrickLayout: React.FC<Props> = ({
  images,
  gap = 1,
  paddingHorizontal = 0,
  Component,
  rounded=0,
  data,
}) => {
  const [leftList, setLeftList] = useState<any[]>([]);
  const [rightList, setRightList] = useState<any[]>([]);
  const [containerHeights, setContainerHeights] = useState({ l: 0, r: 0 });
  const subtraction = paddingHorizontal * 2 + gap;
  const imageWidth = (Dimensions.get("window").width - subtraction) / 2;

  useEffect(() => {
    measureHeightsAndAddImage(images);
  }, []);

  const measureHeightsAndAddImage = useCallback(
    (links: string[]) => {
      let leftHeight = containerHeights.l;
      let rightHeight = containerHeights.r;
      links.map((url, i) => {
        Image.getSize(
          url,
          (naturalWidth, naturalHeight) => {
            const calculatedHeight =
              (naturalHeight / naturalWidth) * imageWidth;
            if (leftHeight > rightHeight) {
              if (data) setRightList((prev) => [...prev, data[i]]);
              else setRightList((prev) => [...prev, url]);
              rightHeight += calculatedHeight;
            } else {
              if (data) setLeftList((prev) => [...prev, data[i]]);
              else setLeftList((prev) => [...prev, url]);
              leftHeight += calculatedHeight;
            }
          },
          (error) => {
            console.error(`Failed to load image ${url}`, error);
          }
        );
      });
      setContainerHeights({ l: leftHeight, r: rightHeight });
    },
    [imageWidth, containerHeights, data]
  );
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal }}>
        <View style={[{ gap }, styles.row]}>
          <View style={[{ gap }, styles.column]}>
            {leftList.map((item, index) =>
              Component ? (
                <Component key={index} item={item} width={imageWidth} />
              ) : (
                <ImageComponent key={index} rounded={rounded} url={item} width={imageWidth} />
              )
            )}
          </View>
          <View style={[{ gap }, styles.column]}>
            {rightList.map((item, index) =>
              Component ? (
                <Component key={index} item={item} width={imageWidth} />
              ) : (
                <ImageComponent key={index} url={item} rounded={rounded} width={imageWidth} />
              )
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  column: {
    flex: 1,
  },
});

export default BrickLayout;
