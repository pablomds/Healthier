import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

const Login = () => {

    return (
    <View className="flex-1 justify-center items-center relative bg-secondary">
      <View className="w-full justify-center items-center">
        <Image
          source={require('../../assets/Logo.png')}
          className="w-20 h-20"
        />
      </View>
      <View>
        <Text className="text-white text-4xl">
          C'est parti ! 
        </Text>
      </View>
      <View>
        <Text className="text-gray-500 text-2xl">
          Plongeons dans votre compte 
        </Text>
      </View>
    </View>
  )
}

export default Login 