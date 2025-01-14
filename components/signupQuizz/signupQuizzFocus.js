import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export const SignupQuizzFocus = ({ gender, selectedAreas, setSelectedAreas }) => {

    const handleSelectArea = (id) => {
        setSelectedAreas((prevSelectedAreas) => {
            if (prevSelectedAreas.includes(id)) {
                // Retirer l'élément s'il est déjà sélectionné
                return prevSelectedAreas.filter((areaId) => areaId !== id);
            } else {
                // Ajouter l'élément s'il n'est pas encore sélectionné
                return [...prevSelectedAreas, id];
            }
        });
    };

    const bodyParts = [
        { id: 0, name: "Full body" },
        { id: 1, name: "Epaules" },
        { id: 2, name: "Pectoraux" },
        { id: 3, name: "Bras" },
        { id: 4, name: "Dos" },
        { id: 5, name: "Abdos" },
        { id: 6, name: "Jambes" }
    ];

    const renderMusclesCards = (bodyPart) => {
        const isSelected = selectedAreas.includes(bodyPart.id);

        return (
            <TouchableOpacity
                key={bodyPart.id}
                onPress={() => handleSelectArea(bodyPart.id)}
                className={`w-32 h-14 rounded-lg bg-secondary-dark flex justify-center items-center border-2 ${isSelected ? "border-primary" : "border-secondary-medium"
                    }`}
            >
                <Text className="text-white text-xl text-center">{bodyPart.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View className="flex-1 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex justify-center items-center">
                <Text className="text-4xl text-white text-center">
                    What's Your <Text className="text-primary">Focus Area</Text>
                </Text>
                <Text className="text-lg text-white text-center">
                    Where would you like to channel your energy?
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full flex flex-row justify-center items-center">
                <View className="w-1/2 h-full flex justify-center items-center gap-y-4">
                    {bodyParts.map((bodyPart) => renderMusclesCards(bodyPart))}
                </View>

                {/* Gender Image */}
                <View className="w-1/2 h-full flex items-center justify-center">
                    <View className="w-5/6 h-5/6 flex items-center justify-center">
                        <Image
                            source={
                                gender === "man"
                                    ? require("../../assets/manAvatar.png")
                                    : require("../../assets/womanAvatar.png")
                            }
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "contain",
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
