
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';

export const SignupQuizzGender = () => {

    const [selected, setSelected] = useState("");
    
    const handlePressMan = () => {
        setSelected("man");
    }

    const handlePressWoman = () => {
        setSelected("woman");
    }

    return (
        <View className="w-full h-4/6 flex justify-center items-center">
            <View className="flex justify-center items-center">
                <Text className="text-4xl text-white text-center"> Select your <Text className="text-primary">Gender</Text> </Text>
                <Text className="text-lg text-white text-center"> Let's start by understanding you. </Text>
            </View>

            <View className="w-1/2 h-full py-4 flex flex-row items-center justify-center">
                <TouchableOpacity 
                     className={`flex justify-center items-center transition-all ${
                          selected === "woman"
                          ? "w-2/3 h-2/3 -translate-x-8 opacity-60"
                          : "w-full h-full"
                    }`} 
                    onPress={() => handlePressMan()}
                >
                    <View className="w-full h-full py-4 flex items-center justify-center">
                        <View className="w-5/6 h-5/6 flex items-center justify-center">
                            <Image
                                source={selected === "man" ? require("../../assets/manAvatarSelected.png") : require("../../assets/manAvatar.png")}
                                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                            />
                        </View>
                        <View className="w-full h-1/6 flex items-center justify-center ">
                            <Text className="text-xl text-white text-center"> Homme </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                    className={`flex justify-center items-center transition-all ${
                        selected === "man"
                        ? "w-2/3 h-2/3 -translate-x-8 opacity-60"
                        : "w-full h-full"
                    }`} 
                    onPress={() => handlePressWoman()}
                >
                    <View className="w-full h-full py-4 flex items-center justify-center">
                        <View className="w-5/6 h-5/6 flex items-center justify-center">
                            <Image
                                source={require("../../assets/womanAvatar.png")}
                                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                            />
                        </View>
                        <View className="w-full h-1/6 flex items-center justify-center ">
                            <Text className="text-xl text-white text-center"> Femme </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}