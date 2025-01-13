import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Arrow from '../../assets/Arrow.svg';
import { SignupQuizzGender } from '../../components/signupQuizz/signupQuizzGender';

const SignupQuizz = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View className="flex-1 w-full h-full py-12 justify-between items-center relative bg-secondary">
      <View className="w-full px-6 h-1/6 flex-row justify-between items-center">
        <View className="h-full mt-2 flex justify-center items-center">
          <Arrow className="h-8 w-8" />
        </View>

        <View className="w-2/3 h-5 flex justify-center items-center">
          <View className="w-full h-full bg-secondary-medium rounded-full overflow-hidden">
            <View
              style={{ width: `${progress}%` }}
              className="h-full rounded-full bg-primary"
            />
          </View>
        </View>

        <View className="h-full flex justify-center items-center">
          <Text className="text-white text-xl">{currentStep} / 14</Text>
        </View>
      </View>

      <SignupQuizzGender />

      <View className="w-full bg-secondary h-1/6 border-t-2 border-secondary-medium flex justify-center">
        <View className="w-full flex flex-row gap-4 items-center justify-center">
          <TouchableOpacity
            className="bg-secondary-medium w-48 h-16 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Passer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary w-48 h-16 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignupQuizz 