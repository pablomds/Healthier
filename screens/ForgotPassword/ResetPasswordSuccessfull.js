import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Successfull from "../../assets/Successfull.svg";


const ResetPasswordSuccessfull = ({ navigation }) => {

  const handleNavigationToLogin = () => navigation.navigate("Login");

  return (
    <View className="flex-1 w-full justify-center items-center py-16 bg-secondary relative">
      <View className="flex flex-col justify-center items-center gap-y-8">
        <Successfull />
        <View className="flex flex-col items-center justify-center gap-y-3">
          <Text className="text-white text-[32px] font-Urbanist-Bold">You're All Set!</Text>
          <Text className="text-white text-[18px] font-Urbanist-Regular">Your password has been successfully changed.</Text>
        </View>
      </View>
            <View className="w-full flex items-center justify-center pt-6 pb-9 px-6 h-[118px] border-t-[1px] border-secondary-medium absolute bottom-0 bg-secondary">
                <TouchableOpacity
                  onPress={handleNavigationToLogin}
                  className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
                >
                  <Text className="text-white font-medium text-lg text-center font-Urbanist-Bold">
                  Go to Login
                  </Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default ResetPasswordSuccessfull