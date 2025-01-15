import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import CheckIcon from "../../assets/checkIcon.svg";
import ExpLow from "../../assets/expLow.svg";
import ExpMedium from "../../assets/expMedium.svg";
import ExpAdvanced from "../../assets/expAdvanced.svg";


export const SignupQuizzExperience = ({ selectedExp, setSelectedExp }) => {

    const levels = [
        { id: 0, name: "Beginner", subName: "I'm new to fitness" },
        { id: 1, name: "Intermediate", subName: "I practice fitness regularly" },
        { id: 2, name: "Expert", subName: "I am experienced & living with fitness" },
    ];

    const handleRenderIcons = (exp) => {
        switch (exp.id) {
            case 0:
                return (
                    <ExpLow />
                )
            case 1:
                return (
                    <ExpMedium />
                )
            case 2:
                return (
                    <ExpAdvanced />
                )
            default:
                return;
        }
    }

    const handleRenderCards = (exp) => {

        return (
            <TouchableOpacity
                key={exp.id}
                onPress={() => setSelectedExp(exp.id)}
                className={`w-full h-28 rounded-xl bg-secondary-dark flex justify-center items-start border-2 ${selectedExp === exp.id ? "border-primary" : "border-secondary-medium"}`}
            >
                <View className="w-full px-4 flex flex-row justify-between items-center">
                    <View className="w-1/6">
                        {handleRenderIcons(exp)}
                    </View>
                    <View className="w-2/3 h-full px-2 py-4 flex justify-between items-start">
                        <Text className="text-white text-2xl text-left flex justify-center items-center font-Urbanist-Black"> {exp.name} </Text>
                        <Text className="text-white text-sm text-left flex justify-center items-center font-Urbanist-Medium"> {exp.subName} </Text>
                    </View>
                    <View className="w-10 flex justify-center items-center">
                        {selectedExp === exp.id &&
                            <CheckIcon />
                        }
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View className="flex-1 mt-14 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex h-40 justify-center items-center">
                <Text className="text-3xl h-20 text-white text-center font-Urbanist-Black">
                    What's Your <Text className="text-primary font-Urbanist-Black">Experience</Text> <Text>In Fitness ?</Text>
                </Text>
                <Text className="text-lg h-20 text-white text-center font-Urbanist-Medium">
                    Share your fitness background with us.
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full flex flex-row justify-center items-center">
                <View className="w-full h-full flex justify-start items-center mb-8 px-4 gap-y-4">
                    {levels.map((level) => handleRenderCards(level))}
                </View>
            </View>
        </View>
    );
};
