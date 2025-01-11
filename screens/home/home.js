import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

const Home = () => {

    return (
    <View className="flex-1 justify-center items-center relative bg-secondary">
        <View className="flex flex-row">
            <Image source={require("../../assets/Logo.png")}/>

        </View>
    </View>
  )
}

export default Home 