import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal, Pressable, StyleSheet  } from 'react-native';
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
import { createUserWithEmailAndPassword, getDataFromCollection } from '../../firebase/functions.js';
import { createUser, getUser, getUsers } from '../../controllers/usersControllers.js';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:"70429617594-98sides19ehqegvoqhfjvfiaurmg83qc.apps.googleusercontent.com",
    clientId: "70429617594-me2htkhrctu7ufer653bnu1qotonl2kp.apps.googleusercontent.com",
    
  })

  useEffect(() => {
    if (response?.type == "succes") {
      const { id_token} = response.params;$
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])


  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    isAgreed: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('This field is required'),
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
      setShowModal(true);
      const userCredential = await createUserWithEmailAndPassword(data.email, data.password);
      const userData = {
        uid: userCredential.user.uid,
        email: data.email
      }
      await createUser(userData);
      navigation.navigate("SignupQuizz");
    } catch (error) {
      console.log("Error while submit :", error.message);
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
          <View className="flex flex-col items-center justify-center h-[200px] w-[340px] bg-secondary py-8 px-8 gap-y-6 rounded-[12px]">
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
          <Text className="text-white text-[32px] font-Urbanist-Black">
            Join Asana Today 👤
          </Text>
          <Text className="text-white text-[18px] font-Urbanist-Regular">
            Start your personalized wellness experience.
          </Text>
        </View>
        <View className="gap-y-4">
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">Email {errors.email && <Text className="text-red-500 text-[18px] font-Urbanist-SemiBold">*</Text>}</Text>
            <View className="bg-secondary-dark h-[65px] rounded-[10px] flex flex-row items-center py-[12px] px-[20px] gap-x-[12px]">
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
                    className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle font-Urbanist-Regular"
                  />
                )}
              />
            </View>
          </View>
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">Password {errors.password && <Text className="text-red-500 text-[18px] font-Urbanist-SemiBold">*</Text>}</Text>
            <View className="flex flex-row justify-between bg-secondary-dark h-[65px] rounded-[10px] items-center  py-[12px] px-[20px]">
              <View className="flex flex-row gap-x-[12px] justify-center items-center">
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
                      className="text-[#FFFF] text-[18px] flex-1 overflow-hidden align-middle max-w-64 font-Urbanist-Regular"
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
              <Controller
                name="isAgreed"
                control={control}
                defaultValue={false}
                render={({ field: { value, onChange } }) => (
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      value && styles.checked, // Apply the checked style if the value is true
                    ]}
                    onPress={() => onChange(!value)} // Toggle the value
                  >
                    {value && <Text style={styles.checkmark}>✓</Text>}
                  </TouchableOpacity>
                )}
              />
              <Text className="text-white text-[18px] font-Urbanist-Medium">
                I agree to Healthier{" "}
                <Text className="text-primary text-[18px] font-Urbanist-Medium">
                  Terms & Conditions
                </Text>
                . {errors.isAgreed && <Text className="text-red-500 text-[18px] font-Urbanist-Medium">*</Text>}
              </Text>
            </View>
            <View className="flex flex-row justify-center gap-x-2">
              <Text className="text-white text-[18px] font-Urbanist-Regular">
                Already have an account ?
              </Text>
              <Text className="text-primary text-[18px] font-Urbanist-SemiBold">Log in</Text>
            </View>
          </View>
        </View>
        <View className="gap-y-5">
          <View className="flex flex-row justify-between items-center">
            <View className="h-1 w-44 bg-[#35383F]"></View>
            <Text className="text-[#EEEEEE] text-[18px] font-Urbanist-Medium">or</Text>
            <View className="h-1 w-44 bg-[#35383F]"></View>
          </View>
          <ScrollView
            className="w-full h-60"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex">
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full bg-secondary-dark border-2 border-secondary-medium" onPress={() => promptAsync()}>
                <Image source={require("../../assets/logoGoogle.png")} />
                <Text className="text-xl text-white ml-12 font-Urbanist-Regular">
                  {" "}
                  Continue with Google{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoApple.png")} />
                <Text className="text-xl text-white ml-12 font-Urbanist-Regular">
                  {" "}
                  Continue with Apple{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoFacebook.png")} />
                <Text className="text-xl text-white ml-12 font-Urbanist-Regular">
                  {" "}
                  Continue with Facebook{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
                <Image source={require("../../assets/logoTwitter.png")} />
                <Text className="text-xl text-white ml-12 font-Urbanist-Regular">
                  {" "}
                  Continue with X{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="w-full flex items-center justify-center pt-6 px-6 pb-9 h-[7.5rem] border-t-[1px] border-secondary-medium absolute bottom-0 bg-secondary">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary w-full h-16 flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-medium text-lg text-center font-Urbanist-Bold">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#7E6DFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#7E6DFC',
    borderColor: '#7E6DFC',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Signup 