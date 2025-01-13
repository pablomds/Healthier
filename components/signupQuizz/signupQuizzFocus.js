import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, Animated, Pressable, Dimensions, PanResponder } from "react-native";

export const SignupQuizzFocus = ({ gender }) => {

    useEffect(() => {
        console.log("gender : ", gender);
      }, [gender]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > 50) {
                // Swipe right
                handlePressMan();
            } else if (gestureState.dx < -50) {
                // Swipe left
                handlePressWoman();
            }
        },
    });

    return (
        <View className="flex-1 w-full h-full flex justify-center items-center">
            {gender === "man" ?
                <View className="w-full h-full">
                    <View className="flex justify-center items-center">
                        <Text className="text-4xl text-white text-center">
                            What's Your <Text className="text-primary">Focus Area</Text>
                        </Text>
                        <Text className="text-lg text-white text-center">
                            Where would you like to channel your energy?
                        </Text>
                    </View>
                    <View className="w-full h-full flex items-center justify-center">
                        <Image
                            source={require("../../assets/manAvatar.png")}
                            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                        />
                    </View>
                </View>
                :
                <View className="w-full h-full">
                    <View className="w-full h-full flex items-center justify-center">
                        <Image
                            source={require("../../assets/womanAvatar.png")}
                            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                        />
                    </View>
                </View>
            }
        </View>
    );
};