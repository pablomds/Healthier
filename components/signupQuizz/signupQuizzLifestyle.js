import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Sedentary from "../../assets/sedentary.svg";

export const SignupQuizzLifeStyle = ({ sedentaryLifeStyle, setSedentaryLifeStyle }) => {

    return (
        <View className="flex-1 mt-14 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex h-40 justify-center items-center">
                <Text className="text-3xl h-20 text-white text-center font-Urbanist-Black">
                    Do You Live a <Text className="text-primary font-Urbanist-Black">Sedentary</Text> <Text>Lifestyle ?</Text>
                </Text>
                <Text className="text-lg h-20 text-white text-center font-Urbanist-Medium">
                    Tell us about your daily routine.
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full pt-10 pb-20 flex justify-between items-center">
                <View className="w-full h-1/3 flex justify-center items-center mb-14 px-4">
                    <Sedentary />
                </View>
                <View className="w-2/3 h-1/3 flex flex-row justify-between items-start">
                    <TouchableOpacity
                        className={`${sedentaryLifeStyle === false && "rounded-full bg-primary"} w-28 h-28 flex justify-center items-center`} 
                        onPress={() => setSedentaryLifeStyle(false)}
                    >
                        <Text className="text-white text-lg font-Urbanist-Medium"> No </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`${sedentaryLifeStyle === true && "rounded-full bg-primary"} w-28 h-28 flex justify-center items-center`}
                        onPress={() => setSedentaryLifeStyle(true)}
                    >
                        <Text className="text-white text-lg font-Urbanist-Medium"> Yes </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
