import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Arrow from '../../assets/Arrow.svg';

const signupQuizz = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View className="flex-1 w-full py-16 justify-between items-center relative bg-secondary">
      <View className="w-full px-6 h-20 flex-row justify-center items-center">
        <View className="flex justify-center items-center">
          <Arrow />
        </View>
        <View className="w-2/3 h-5 bg-secondary-medium rounded-full overflow-hidden">
          <View
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-primary"
          />
        </View>
      </View>
      <View className="w-full flex flex-row justify-center">
        <Image source={require("../../assets/manAvatar.png")} />
        <Image source={require("../../assets/womanAvatar.png")} />
      </View>
      <View className="w-full bg-secondary h-20 flex justify-center items-center border-t-2 border-secondary-medium">
        <View className="w-full flex flex-row h-32 gap-4 items-center justify-center">
          <TouchableOpacity
            className="bg-secondary-medium w-48 h-1/2 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Passer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary w-48 h-1/2 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center">Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default signupQuizz 