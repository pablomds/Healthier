import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LeftArrowIconSVG from "../../assets/Iconly/Regular/Outline/Arrow - Left.svg"

const Login = () => {

  return (
    <View className="flex-1 w-full px-6 py-16 justify-between items-center relative bg-secondary">
      <View className="w-full justify-start items-start">
        <LeftArrowIconSVG className="bg-white" height={50} width={50}/>
      </View>
    </View>
  )
}

export default Login 