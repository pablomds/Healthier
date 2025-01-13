import React, { useState, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import LeftArrowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ArrowLeftWhite.svg";
import MessageIconSVG from "../../assets/Iconly/Regular/Outline/MessageWhite.svg";
import LockWhiteIconSVG from "../../assets/Iconly/Regular/Outline/LockWhite.svg";
import HideWhiteIconSVG from "../../assets/Iconly/Regular/Outline/HideWhite.svg";
import { CheckBox } from 'rn-inkpad';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ShowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ShowWhite.svg";
import LoaderIconSVG from '../../components/global/loader/loader.js';
import { auth } from '../../firebase/firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      setShowModal(true);
      console.log("check your emails")
    } catch (error) {
      console.log("Error :", error.message);
    } finally {
      setShowModal(true);
    }
  };

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
          <View
            className="flex flex-col items-center justify-center h-[200px] w-[340px] bg-secondary py-8 px-8 gap-y-6"
          >
            <LoaderIconSVG className="animate-spin h-full w-full" />
            <Pressable onPress={() => setShowModal(false)}>
              <Text className="text-white text-xl">Sign up...</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View className="flex flex-row justify-between px-6 py-3 h-[72px]">
        <LeftArrowWhiteIconSVG height={40} width={40} />
      </View>
      <View className="flex flex-col px-6 py-2 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="text-white text-[32px]">Join Asana Today 👤</Text>
          <Text className="text-white text-[18px]">
            Start your personalized wellness experience.
          </Text>
        </View>
        <View className="gap-y-4">
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px]">Email</Text>
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
                    className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle"
                  />
                )}
              />
            </View>
          </View>
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px]">Password</Text>
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
                      className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle max-w-64"
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
          <View className="flex flex-col gap-y-8">
            <View className="flex flex-row justify-start gap-x-4">
              <CheckBox iconColor="#7E6DFC" iconSize={24} title="" />
              <Text className="text-white text-[18px]">
                I agree to Asana{" "}
                <Text className="text-primary text-[18px]">
                  Terms & Conditions.
                </Text>
              </Text>
            </View>
            <View className="flex flex-row justify-center gap-x-2">
              <Text className="text-white text-[18px]">
                Already have an account ?
              </Text>
              <Text className="text-primary text-[18px]">Log in</Text>
            </View>
          </View>
        </View>
        <View className="gap-y-5">
          <View className="flex flex-row justify-between items-center">
            <View className="h-1 w-44 bg-[#35383F]"></View>
            <Text className="text-[#EEEEEE] text-[18px]">or</Text>
            <View className="h-1 w-44 bg-[#35383F]"></View>
          </View>
          <ScrollView
            className="w-full h-60"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex">
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoGoogle.png")} />
                <Text className="text-xl text-white ml-12">
                  {" "}
                  Continue with Google{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoApple.png")} />
                <Text className="text-xl text-white ml-12">
                  {" "}
                  Continue with Apple{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoFacebook.png")} />
                <Text className="text-xl text-white ml-12">
                  {" "}
                  Continue with Facebook{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoTwitter.png")} />
                <Text className="text-xl text-white ml-12">
                  {" "}
                  Continue with X{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="w-full flex items-center justify-center pt-6 px-6 pb-9 h-[7.5rem] border-t-[1px] border-secondary-medium absolute bottom-20 bg-secondary">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-medium text-lg text-center">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup 