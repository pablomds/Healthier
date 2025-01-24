import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, TextInput, TouchableOpacity, ScrollView,Modal, Pressable } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInWithEmailAndPassword } from '../../firebase/functions.js';
import { SignInWithService } from '../../components/global/SignIn/SignInWithService.js';

import { CheckBox } from '../../components/global/checkbox/CheckBox.js';

import LeftArrowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ArrowLeftWhite.svg";
import MessageIconSVG from "../../assets/Iconly/Regular/Outline/MessageWhite.svg";
import LockWhiteIconSVG from "../../assets/Iconly/Regular/Outline/LockWhite.svg";
import HideWhiteIconSVG from "../../assets/Iconly/Regular/Outline/HideWhite.svg";
import ShowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ShowWhite.svg";
import LoaderIconSVG from "../../components/global/loader/loader.js";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    hasToRemember: Yup.boolean(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("data :",data)
    try {
      setShowModal(true);
      const userCredential = await signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const handleNavigateToAccess = () => {
    navigation.navigate("Access");
  };

  const handleNavigateToLogin = () => navigation.navigate("ForgotPassword");

  return (
    <View className="flex-1 w-full py-16 bg-secondary relative">
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="flex-1 justify-center items-center"
        >
          <View className="flex flex-col items-center justify-center h-[200px] w-[340px] bg-secondary py-8 px-8 gap-y-6">
            <LoaderIconSVG className="animate-spin h-full w-full" />
            <Pressable onPress={() => setShowModal(false)}>
              <Text className="text-white text-xl">Log in...</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View className="flex flex-row justify-between px-6 py-3 h-[72px]">
        <TouchableOpacity onPress={handleNavigateToAccess}>
          <LeftArrowWhiteIconSVG height={40} width={40} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col px-6 py-2 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="text-white text-[32px] font-Urbanist-Bold">
            Welcome Back! 👋
          </Text>
          <Text className="text-white text-[18px] font-Urbanist-Regular">
            Sign in to continue your wellness journey.
          </Text>
        </View>
        <View className="gap-y-4">
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Email {errors.email && <Text className="text-errors text-[18px] font-Urbanist-SemiBold">*</Text>}
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
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Password {errors.password && <Text className="text-errors text-[18px] font-Urbanist-SemiBold">*</Text>}
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
          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-x-4">
              <Controller
                name="hasToRemember"
                control={control}
                defaultValue={false}
                render={({ field: { value, onChange } }) => (
                  <CheckBox onPress={() => onChange(!value)} value={value} />
                )}
              />
              <Text className="text-white text-[18px] font-Urbanist-Medium">
                Remember me
              </Text>
            </View>
            <TouchableOpacity onPress={handleNavigateToLogin} >
              <Text className="text-white text-[18px] font-Urbanist-SemiBold">
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="gap-y-5">
          <View className="flex flex-row justify-between items-center">
            <View className="h-1 w-44 bg-[#35383F]"></View>
            <Text className="text-[#EEEEEE] text-[18px] font-Urbanist-Medium">
              or
            </Text>
            <View className="h-1 w-44 bg-[#35383F]"></View>
          </View>
          <ScrollView
            className="w-full h-60"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex">
              <SignInWithService
                service="Google"
                onPress={() => console.log("Google Login")}
              />
              <SignInWithService
                service="Apple"
                onPress={() => console.log("Apple Login")}
              />
              <SignInWithService
                service="Facebook"
                onPress={() => console.log("Facebook Login")}
              />
              <SignInWithService
                service="X"
                onPress={() => console.log("X Login")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="w-full flex items-center justify-center pt-6 px-6 pb-9 h-[7.5rem] border-t-[1px] border-secondary-medium absolute bottom-20 bg-secondary">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-medium text-lg text-center font-Urbanist-Bold">
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login 