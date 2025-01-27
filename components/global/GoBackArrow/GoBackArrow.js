import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LeftArrowWhiteIconSVG from "../../../assets/Iconly/Regular/Outline/ArrowLeftWhite.svg";

const GoBackArrow = ({ navigationTo }) => {
  return (
    <View className="flex flex-row justify-between px-6 py-3 h-[72px]">
      <TouchableOpacity onPress={navigationTo}>
        <LeftArrowWhiteIconSVG height={40} width={40} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackArrow