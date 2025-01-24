import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import GoBackArrow from '../../components/global/GoBackArrow/GoBackArrow';

const EnterOptCode = ({ navigation }) => {
    // const handleNavigationToForgotPassword = navigation.navigate("ForgotPassword");
  return (
    <View className="flex-1 w-full py-16 bg-secondary relative">
        <GoBackArrow navigationTo={() => console.log("navigation")}></GoBackArrow>
        <View className="flex flex-col py-2 px-6 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="font-Urbanist-Bold text-[32px]  text-white">
             Enter OTP Code 🔐
          </Text>
          <Text className="font-Urbanist-Regular text-[18px] text-white">
            Please check your email inbox for a message from Asana. Enter the one-time verification code below.
          </Text>
        </View>
        <View className="flex flex-col gap-y-2">
          {/* <Text className="text-white text-[18px] font-Urbanist-SemiBold">
            Your Registered Email
            {errors.email && (
              <Text className="text-errors text-[18px] font-Urbanist-SemiBold">
                *
              </Text>
            )}
          </Text>
          <View className="bg-secondary-dark h-[65px] rounded-[10px] flex flex-row items-center py-[18px] px-[20px] gap-x-[12px]">
            <MessageIconSVG height="20" width="20" />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                  placeholderTextColor="#9E9E9E"
                  className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle font-Urbanist-SemiBold"
                />
              )}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
}

export default EnterOptCode