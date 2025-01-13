import React from 'react';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import LeftArrowIconSVG from "../../assets/Iconly/Regular/Outline/Arrow - Left.svg";

const navbar = () => {
  return (
    <View className="w-full justify-start items-start">
      <LeftArrowIconSVG className="bg-white" height={50} width={50} />
    </View>
  );
};

export default navbar