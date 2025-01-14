import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, Animated, Pressable, Dimensions, PanResponder } from "react-native";

export const SignupQuizzGender = ({ selectedGender, setSelectedGender }) => {

    // Animation values
    const scaleMan = useRef(new Animated.Value(1)).current;
    const scaleWoman = useRef(new Animated.Value(1)).current;
    const opacityMan = useRef(new Animated.Value(1)).current;
    const opacityWoman = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const screenWidth = Dimensions.get("window").width; // Get screen width 

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

    useEffect(() => {
        if (selectedGender === "man") {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: screenWidth * 0.25, // Move to center "man"
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleMan, {
                    toValue: 1.2,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityMan, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleWoman, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityWoman, {
                    toValue: 0.6,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
        if (selectedGender === "woman") {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: -screenWidth * 0.25, // Move to center "woman"
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleWoman, {
                    toValue: 1.2,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityWoman, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleMan, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityMan, {
                    toValue: 0.6,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [selectedGender])

    const handlePressMan = () => {
        setSelectedGender("man");
    };

    const handlePressWoman = () => {
        setSelectedGender("woman");
    };

    return (
        <View className="flex-1 w-full h-full flex justify-center items-center">
            {/* Title */}
            <View className="flex justify-center items-center">
                <Text className="text-4xl text-white text-center">
                    Select Your <Text className="text-primary">Gender</Text><Text>?</Text>
                </Text>
                <Text className="text-lg text-white text-center">
                    Let's start by understanding you.
                </Text>
            </View>

            {/* Gender options */}
            <View className="w-1/2 h-full py-4 flex flex-row items-center justify-center" {...panResponder.panHandlers}>
                {/* Man */}
                <Animated.View
                    style={{
                        flexDirection: "row",
                        transform: [{ translateX }],
                        width: screenWidth * 0.5, // Width for both avatars
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Pressable className="w-full h-full flex justify-center items-center" onPress={handlePressMan}>
                        <Animated.View
                            style={{
                                transform: [{ scale: scaleMan }],
                                opacity: opacityMan,
                                width: "90%",
                                height: "90%",
                            }}
                        >
                            <View className="w-full h-full py-4 flex items-center justify-center">
                                <View className="w-5/6 h-5/6 flex items-center justify-center">
                                    <Image
                                        source={
                                            selectedGender === "man"
                                                ? require("../../assets/manAvatarSelected.png")
                                                : require("../../assets/manAvatar.png")
                                        }
                                        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                                    />
                                </View>
                                <View className="w-full h-1/6 mb-4 flex items-center justify-center">
                                    <Text className="text-xl text-white text-center">Man</Text>
                                </View>
                            </View>

                        </Animated.View>
                    </Pressable>
                </Animated.View>
                {/* Woman */}
                <Animated.View
                    style={{
                        flexDirection: "row",
                        transform: [{ translateX }],
                        width: screenWidth * 0.5, // Width for both avatars
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Pressable className="w-full h-full flex justify-center items-center" onPress={handlePressWoman}>
                        <Animated.View
                            style={{
                                transform: [{ scale: scaleWoman }],
                                opacity: opacityWoman,
                                width: "90%",
                                height: "90%",
                            }}
                        >
                            <View className="w-full h-full py-4 flex items-center justify-center">
                                <View className="w-5/6 h-5/6 flex items-center justify-center">
                                    <Image
                                        source={
                                            selectedGender === "woman"
                                                ? require("../../assets/womanAvatarSelected.png")
                                                : require("../../assets/womanAvatar.png")
                                        }
                                        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                                    />
                                </View>
                                <View className="w-full h-1/6 mb-4 flex items-center justify-center">
                                    <Text className="text-xl text-white text-center">Woman</Text>
                                </View>
                            </View>
                        </Animated.View>
                    </Pressable>
                </Animated.View>
            </View>
        </View>
    );
};