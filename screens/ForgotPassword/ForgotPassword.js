import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import LeftArrowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ArrowLeftWhite.svg";
import MessageIconSVG from "../../assets/Iconly/Regular/Outline/MessageWhite.svg";

const ForgotPassword = ({ navigation }) => {
  const handleNavigateToAccess = () => navigation.navigate("Login");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = async (data) => {
    navigation.navigate("EnterOptCode")
    try {
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <View className="flex-1 w-full py-16 bg-secondary relative">
      <View className="flex flex-row justify-between px-6 py-3 h-[72px]">
        <TouchableOpacity onPress={handleNavigateToAccess}>
          <LeftArrowWhiteIconSVG height={40} width={40} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col py-2 px-6 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="font-Urbanist-Bold text-[32px]  text-white">
            Forgot Your Password? 🔑{" "}
          </Text>
          <Text className="font-Urbanist-Regular text-[18px] text-white">
            Enter your registered email address, and we'll send you a one-time
            verification code to reset your password.
          </Text>
        </View>
        <View className="flex flex-col gap-y-2">
          <Text className="text-white text-[18px] font-Urbanist-SemiBold">
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
          </View>
        </View>
      </View>
      <View className="w-full flex items-center justify-center pt-6 px-6 pb-9 h-[7.5rem] border-t-[1px] border-secondary-medium absolute bottom-20 bg-secondary">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-medium text-lg text-center font-Urbanist-Bold">
            Send OTP Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
