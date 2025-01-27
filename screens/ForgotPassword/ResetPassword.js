import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import GoBackArrow from "../../components/global/GoBackArrow/GoBackArrow";

import LockWhiteIconSVG from "../../assets/Iconly/Regular/Outline/LockWhite.svg";
import HideWhiteIconSVG from "../../assets/Iconly/Regular/Outline/HideWhite.svg";
import ShowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ShowWhite.svg";

const ResetPassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, "*Password must be at least 6 characters")
      .required("*"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "*Passwords must match")
      .required("*"),
  });
  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit"
  });
  const handleNavigationToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
    const onSubmit = async (data) => {
      console.log("data :", data);
      try {
      } catch (error) {
        console.log("Error :", error);
      }
    };
  return (
    <View className="flex-1 w-full py-16 bg-secondary relative">
      <GoBackArrow
        navigationTo={handleNavigationToForgotPassword}
      ></GoBackArrow>
      <View className="flex flex-col py-2 px-6 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="font-Urbanist-Bold text-[32px]  text-white">
            Secure Your Account 🔒
          </Text>
          <Text className="font-Urbanist-Regular text-[18px] text-white">
            Almost there! Create a new password for your Heatlhier account to keep
            it secure. Remember to choose a strong and unique password.
          </Text>
        </View>
        <View className="flex flex-col gap-y-4">
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Password{" "}
              {errors.password && (
                <Text className="text-errors text-[16px] font-Urbanist-Italic">
                  {errors.password.message}
                </Text>
              )}
            </Text>
            <View className="flex flex-row justify-between bg-secondary-dark h-[65px] rounded-[10px] items-center py-[18px] px-[20px]">
              <View className="flex flex-row gap-x-[12px]">
                <LockWhiteIconSVG height="20" width="20" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={showPassword}
                      placeholder="Password"
                      placeholderTextColor="#9E9E9E"
                      className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle max-w-64 font-Urbanist-SemiBold"
                    />
                  )}
                />
              </View>
              <TouchableOpacity
                className="right-[22.5px]"
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <HideWhiteIconSVG height="20" width="20" />
                ) : (
                  <ShowWhiteIconSVG height="20" width="20" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Confirm New Password{" "}
              {errors.confirmPassword && (
                <Text className="text-errors text-[16px] font-Urbanist-Italic">
                  { errors.confirmPassword.message }
                </Text>
              )}
            </Text>
            <View className="flex flex-row justify-between bg-secondary-dark h-[65px] rounded-[10px] items-center py-[18px] px-[20px]">
              <View className="flex flex-row gap-x-[12px]">
                <LockWhiteIconSVG height="20" width="20" />
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={showConfirmPassword}
                      placeholder="Confirm Password"
                      placeholderTextColor="#9E9E9E"
                      className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle max-w-64 font-Urbanist-SemiBold"
                    />
                  )}
                />
              </View>
              <TouchableOpacity
                className="right-[22.5px]"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <HideWhiteIconSVG height="20" width="20" />
                ) : (
                  <ShowWhiteIconSVG height="20" width="20" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full flex items-center justify-center pt-6 pb-9 px-6 h-[118px] border-t-[1px] border-secondary-medium absolute bottom-0 bg-secondary">
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
          >
            <Text className="text-white font-medium text-lg text-center font-Urbanist-Bold">
            Save New Password
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
