import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import CheckIcon from "../../assets/checkIcon.svg"

export const SignupQuizzGoal = ({ selectedGoals, setSelectedGoals }) => {

    const goals = [
        { id: 0, name: "🏋️‍♀️    Weight Loss" },
        { id: 1, name: "😴    Better Sleep Quality" },
        { id: 2, name: "🧘‍♀️    Body Relaxation" },
        { id: 3, name: "🍏    Improve Health" },
        { id: 4, name: "🌬    Relieve Stress" },
        { id: 5, name: "🩰    Mobility Improvement" }
    ];

    const handleSelectGoals = (id) => {
        setSelectedGoals((prevSelectedGoals) => {
            // Ajouter ou retirer l'élément classique
            if (prevSelectedGoals.includes(id)) {
                return prevSelectedGoals.filter((goalId) => goalId !== id);
            } else {
                return [...prevSelectedGoals, id];
            }

        });
    };

    const handleRenderCards = (goal) => {
        const isSelected = selectedGoals.includes(goal.id);

        return (
            <TouchableOpacity
                key={goal.id}
                onPress={() => handleSelectGoals(goal.id)}
                className={`w-full h-20 rounded-xl bg-secondary-dark flex justify-center items-start border-2 ${isSelected ? "border-primary" : "border-secondary-medium"}`}
            >
                <View className="w-full px-4 flex flex-row justify-between items-center">
                    <Text className="text-white text-xl text-left flex justify-center items-center font-Urbanist-Medium"> {goal.name} </Text>
                    {isSelected && 
                        <View className="flex justify-center items-center">
                             <CheckIcon />
                        </View>
                    }
                </View>                
            </TouchableOpacity>
        );
    }

    return (
        <View className="flex-1 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex justify-center items-center">
                <Text className="text-3xl h-12 text-white text-center font-Urbanist-Black">
                    What's Your Health <Text className="text-primary font-Urbanist-Black">Goal</Text> <Text>?</Text>
                </Text>
                <Text className="text-lg text-white text-center font-Urbanist-Medium">
                    Tell us what you aim to achieve with Healthier.
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full flex flex-row justify-center items-center">
                <View className="w-full h-full flex justify-center items-center mb-8 px-4 gap-y-4">
                    {goals.map((goal) => handleRenderCards(goal))}
                </View>
            </View>
        </View>
    );
};
