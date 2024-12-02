import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ImageComponentProps {
  url: string;
  width: number;
  rounded?:number
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url, width,rounded=0 }) => {
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    // Fetch the natural size of the image (width and height)
    Image.getSize(url, (naturalWidth, naturalHeight) => {
      // Calculate the height based on the provided width, keeping the aspect ratio
      const calculatedHeight = (naturalHeight / naturalWidth) * width;
      setImageHeight(calculatedHeight); // Set the calculated height to state
    });
  }, [url, width]); // Re-run when URL or width changes

  // If imageHeight is not calculated yet, display a loader or placeholder
  if (imageHeight === 0) {
    return (
      <View style={[styles.placeholder, { width }]}>
        {/* You can place a placeholder spinner or image here */}
      </View>
    );
  }

  return (
    <Image
      source={{ uri: url }}
      style={{ width, height: imageHeight,borderRadius:rounded }}
      resizeMode="cover" // You can choose 'contain', 'stretch', etc.
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#f0f0f0', // Placeholder background color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageComponent;
