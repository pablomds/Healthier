import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export const SignupQuizzFocus = ({ gender, selectedAreas, setSelectedAreas }) => {

    const handleSelectArea = (id) => {
        setSelectedAreas((prevSelectedAreas) => {
            if (id === 0) {
                // Si "Full Body" est sélectionné, désélectionner tous les autres
                return prevSelectedAreas.includes(0) ? [] : [0];
            } else {
                // Si un autre est sélectionné, désactiver "Full Body" si présent
                if (prevSelectedAreas.includes(0)) {
                    return [id];
                }
                // Ajouter ou retirer l'élément classique
                if (prevSelectedAreas.includes(id)) {
                    return prevSelectedAreas.filter((areaId) => areaId !== id);
                } else {
                    return [...prevSelectedAreas, id];
                }
            }
        });
    };

    const bodyParts = [
        { id: 0, name: "Full body" },
        { id: 1, name: "Shoulders" },
        { id: 2, name: "Chest" },
        { id: 3, name: "Arms" },
        { id: 4, name: "Back" },
        { id: 5, name: "Core" },
        { id: 6, name: "Legs" }
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
                    What's Your <Text className="text-primary">Focus Area</Text><Text>?</Text>
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
