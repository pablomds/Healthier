import ScrollPicker from "react-native-wheel-scrollview-picker";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import CheckIcon from "../../assets/checkIcon.svg"

export const SignupQuizzAge = ({ selectedAge, setSelectedAge }) => {

    return (
        <View className="flex-1 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex justify-center items-center">
                <Text className="text-3xl h-12 text-white text-center font-Urbanist-Black">
                    How <Text className="text-primary font-Urbanist-Black">Old</Text> <Text>Are You ?</Text>
                </Text>
                <Text className="text-lg text-white text-center font-Urbanist-Medium">
                    Share your age with us.
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full flex flex-row justify-center items-center">
                <View className="w-full h-full flex justify-center items-center mb-8 px-4 gap-y-4">
                    <ScrollPicker
                        dataSource={["1", "2", "3", "4", "5", "6"]}
                        selectedIndex={1}
                        // renderItem={(data, index) => {
                        //     //
                        // }}
                        // onValueChange={(data, selectedIndex) => {
                        //     //
                        // }}
                        wrapperHeight={180}
                        wrapperBackground="#FFFFFF"
                        itemHeight={60}
                        highlightColor="#d8d8d8"
                        highlightBorderWidth={2}
                    />
                </View>
            </View>
        </View>
    );
};
