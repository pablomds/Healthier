import React, { useState } from "react";
import { Text, View, Image, Pressable, PanResponder } from "react-native";
import BackgroundDoubleArrow from "../../assets/backgroundDoubleArrow.svg"

export const SignupQuizzGoalShape = ({ selectedShape, selectedGoalShape, setSelectedGoalShape }) => {
    const shapes = [
        { id: 0, name: "Muscular" },
        { id: 1, name: "Ideal" },
        { id: 2, name: "Normal" }, // Point par défaut
        { id: 3, name: "Dad Bod" },
        { id: 4, name: "Obese" },
    ];

    const [dragging, setDragging] = useState(false); // Indique si le curseur est en train d'être déplacé
    const [dragPosition, setDragPosition] = useState(2); // Position initiale sur "Normal"

    // Fonction pour afficher l'image en fonction du point sélectionné
    const handleRenderBodyShape = () => {
        switch (selectedShape) {
            case 0:
                return require("../../assets/bodyShapeMuscular.png");
            case 1:
                return require("../../assets/bodyShapeIdeal.png");
            case 2:
                return require("../../assets/bodyShapeNormal.png");
            case 3:
                return require("../../assets/bodyShapeDadBod.png");
            case 4:
                return require("../../assets/bodyShapeObese.png");
            default:
                return require("../../assets/bodyShapeNormal.png");
        }
    };

    const handleRenderGoalBodyShape = () => {
        switch (selectedGoalShape) {
            case 0:
                return require("../../assets/bodyShapeMuscular.png");
            case 1:
                return require("../../assets/bodyShapeIdeal.png");
            case 2:
                return require("../../assets/bodyShapeNormal.png");
            case 3:
                return require("../../assets/bodyShapeDadBod.png");
            case 4:
                return require("../../assets/bodyShapeObese.png");
            default:
                return require("../../assets/bodyShapeNormal.png");
        }
    };

    // PanResponder pour déplacer le curseur
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            // On commence à glisser si l'on touche le point actif
            const touchX = gestureState.x0;
            const pointWidth = 60; // Largeur estimée de chaque point
            const activePointPosition = dragPosition * pointWidth;

            // Démarre le glissement uniquement si on touche le point actif
            return touchX >= activePointPosition - 20 && touchX <= activePointPosition + 20;
        },
        onPanResponderGrant: () => {
            setDragging(true); // Commence à glisser
        },
        onPanResponderMove: (e, gestureState) => {
            if (dragging) {
                // Calculer la nouvelle position en fonction du mouvement du glissement
                const position = Math.max(
                    0,
                    Math.min(shapes.length - 1, Math.floor(gestureState.moveX / 60))
                );
                setDragPosition(position); // Met à jour la position du curseur
                setSelectedGoalShape(shapes[position].id); // Met à jour la forme sélectionnée
            }
        },
        onPanResponderRelease: () => {
            setDragging(false); // Arrêter le glissement
        },
    });

    return (
        <View className="flex-1 w-full h-full justify-center items-center bg-secondary">
            {/* Title */}
            <View className="flex justify-center items-center">
                <Text className="text-3xl h-12 text-white text-center font-Urbanist-Black">
                    Your <Text className="text-primary font-Urbanist-Black">Desired</Text> <Text>Body Shape</Text>
                </Text>
                <Text className="text-lg text-white text-center font-Urbanist-Medium">
                    What's your ideal aspiration?
                </Text>
            </View>

            {/* Content */}
            <View className="w-full h-full flex justify-center items-center">
                <View className="w-full h-5/6 flex flex-row justify-center items-center px-24 mt-8">
                    <View className="absolute">
                        <BackgroundDoubleArrow />
                    </View>
                    <Image
                        source={handleRenderBodyShape()}
                        style={{
                            width: "80%",
                            height: "80%",
                            resizeMode: "contain",
                        }}
                    />
                     <Image
                        source={handleRenderGoalBodyShape()}
                        style={{
                            width: "80%",
                            height: "80%",
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <View className="w-full h-1/6 mb-20">
                    <View className="w-full px-10">
                        {/* Points Section */}
                        <View
                            {...panResponder.panHandlers} // Applique le panResponder uniquement sur la zone de points
                            className="w-full h-6 px-2 mb-4 rounded-xl bg-secondary-dark flex flex-row justify-between items-center"
                        >
                            {shapes.map((shape, index) => (
                                <Pressable
                                    key={shape.id}
                                    onPress={() => setSelectedGoalShape(shape.id)} // Sélectionner un point si on appuie dessus
                                    style={{
                                        padding: 10, // Agrandir la zone de clic
                                    }}
                                >
                                    <View
                                        className={`rounded-full ${selectedGoalShape === shape.id
                                                ? "bg-primary w-8 h-8"
                                                : "bg-secondary-light w-3 h-3"
                                            }`}
                                    />
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    {/* Labels Section */}
                    <View className="w-full h-6 px-4 flex flex-row justify-between items-center">
                        {shapes.map((shape) => (
                            <Text
                                key={shape.id}
                                onPress={() => setSelectedGoalShape(shape.id)} // Sélectionner un point via le texte
                                className={`text-white font-Urbanist-Medium ${selectedGoalShape === shape.id ? "text-primary" : "text-white"
                                    }`}
                            >
                                {shape.name}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};
