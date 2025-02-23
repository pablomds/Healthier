import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Animated  } from 'react-native';
import Arrow from '../../assets/Arrow.svg';
import { SignupQuizzGender } from '../../components/signupQuizz/signupQuizzGender';
import { SignupQuizzFocus } from '../../components/signupQuizz/signupQuizzFocus';
import { SignupQuizzGoal } from '../../components/signupQuizz/signupQuizzGoal';

const SignupQuizz = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);

  const progressAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Lorsque currentStep change, on anime la barre de progression
    Animated.timing(progressAnim, {
      toValue: progress, // On cible la nouvelle valeur de la progression
      duration: 500,      // Durée de l'animation (500 ms)
      useNativeDriver: false, // On ne peut pas utiliser native driver ici car on anime une valeur de style
    }).start();
  }, [currentStep]); 

  const handleNextStep = () => {
    switch (currentStep) {
      case 1:
        if (selectedGender === "man" || selectedGender === "woman") {
          setCurrentStep(currentStep + 1);
        }
        break;
      case 2:
        if (selectedAreas.length) {
          setCurrentStep(currentStep + 1);
        }
        break;
      default:
        if (currentStep < totalSteps) {
          setCurrentStep(currentStep + 1);
        }
        break;
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const handleRenderQuizzContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignupQuizzGender selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
        )
      case 2:
        return (
          <SignupQuizzFocus gender={selectedGender} selectedAreas={selectedAreas} setSelectedAreas={setSelectedAreas} />
        )
      case 3: 
        return (
          <SignupQuizzGoal selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
        )
    }
  }

  return (
    <View className="flex-1 w-full h-full justify-between items-center relative bg-secondary">
      <View className="w-full px-6 h-1/6 flex-row justify-between items-center">
        <View className="h-full flex justify-center items-center" >
          <Arrow className="h-8 w-8" onPress={handlePreviousStep} />
        </View>

        <View className="w-2/3 h-4 flex justify-center items-center">
        <View className="w-full h-full bg-secondary-medium rounded-full overflow-hidden">
            {/* Utilisation de Animated pour la barre de progression */}
            <Animated.View
              style={{
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'], // Change la largeur de 0% à 100%
                }),
              }}
              className="h-full rounded-full bg-primary"
            />
          </View>
        </View>

        <View className="h-full flex justify-center items-center">
          <Text className="text-white text-xl">{currentStep} / 14</Text>
        </View>
      </View>

      {handleRenderQuizzContent()}

      <View className="w-full bg-secondary h-32 border-t-2 border-secondary-medium flex justify-center items-center">
        <View className="w-full flex flex-row h-32 gap-4 items-center justify-center">
          <TouchableOpacity
            className="bg-secondary-medium w-48 h-1/2 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Passer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary w-48 h-1/2 flex justify-center items-center rounded-full"
            onPress={handleNextStep}
          >
            <Text className="text-white font-medium text-lg text-center">Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignupQuizz;