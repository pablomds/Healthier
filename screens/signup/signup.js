import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Modal, Pressable, StyleSheet, Alert, Platform   } from 'react-native';
import LeftArrowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ArrowLeftWhite.svg";
import MessageIconSVG from "../../assets/Iconly/Regular/Outline/MessageWhite.svg";
import LockWhiteIconSVG from "../../assets/Iconly/Regular/Outline/LockWhite.svg";
import HideWhiteIconSVG from "../../assets/Iconly/Regular/Outline/HideWhite.svg";
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ShowWhiteIconSVG from "../../assets/Iconly/Regular/Outline/ShowWhite.svg";
import LoaderIconSVG from '../../components/global/loader/loader.js';
import { auth } from '../../firebase/firebaseConfig.js';
import { createUserWithEmailAndPassword, getDataFromCollection } from '../../firebase/functions.js';
import { createUser, getUser, getUsers } from '../../controllers/usersControllers.js';
import { SignInWithService } from '../../components/global/SignIn/SignInWithService.js';
import { CheckBox } from '../../components/global/checkbox/CheckBox.js';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

const CLIENT_ID = '70429617594-9in75jr6n1vkldn0rvukgkd4uovi4lah.apps.googleusercontent.com';
const IOS_CLIENT_ID = '70429617594-2os8mc39s6fnb09nslq7o6n87822mkh3.apps.googleusercontent.com';

const DISCOVERY = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

WebBrowser.maybeCompleteAuthSession(); // Completes the session if returning from a redirect

const Signup = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    isAgreed: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('This field is required'),
  });

  const REDIRECT_URI = makeRedirectUri({ useProxy: true });

  console.log("Redirect URI (with proxy):", REDIRECT_URI); // Should print https://auth.expo.io/@pablo_mds/Healthier

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: Platform.OS === 'ios' ? IOS_CLIENT_ID : CLIENT_ID,
      redirectUri: Platform.OS === 'ios' ? "https://auth.expo.io/@pablo_mds/Healthier" : REDIRECT_URI,  // This should use Expo's proxy redirect URL
      scopes: ['openid', 'email', 'profile'],
      responseType: 'code',
    },
    DISCOVERY
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      Alert.alert('Success', `Authentication Code: ${code}`);
      console.log('Auth Code:', code);
    } else if (response?.type === 'error') {
      Alert.alert('Error', `Something went wrong: ${response.error}`);
      console.log('Error:', response.error);
    }
  }, [response]);

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
      };
      await createUser(userData);
      navigation.navigate("SignupQuizz");
    } catch (error) {
      console.log("Error while submit :", error.message);
    } finally {
      setShowModal(true);
    }
  };

  const handleNavigateToAccess = () => {
    navigation.navigate("Access");
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
        <TouchableOpacity onPress={handleNavigateToAccess}>
          <LeftArrowWhiteIconSVG height={40} width={40} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-col px-6 py-2 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="text-white text-[32px] font-Urbanist-Bold">
            Join Healthier Today 👤
          </Text>
          <Text className="text-white text-[18px] font-Urbanist-Regular">
            Start your personalized wellness experience.
          </Text>
        </View>
        <View className="gap-y-4">
          <View className="flex flex-col gap-y-2">
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Email{" "}
              {errors.email && (
                <Text className="text-errors text-[18px] font-Urbanist-SemiBold">
                  *
                </Text>
              )}
            </Text>
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
            <Text className="text-white text-[18px] font-Urbanist-SemiBold">
              Password{" "}
              {errors.password && (
                <Text className="text-errors text-[18px] font-Urbanist-SemiBold">
                  *
                </Text>
              )}
            </Text>
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
                  <CheckBox onPress={() => onChange(!value)} value={value} />
                )}
              />
              <Text className="text-white text-[18px] font-Urbanist-Medium">
                I agree to Healthier{" "}
                <Text className="text-primary text-[18px] font-Urbanist-Medium">
                  Terms & Conditions
                </Text>
                .{" "}
                {errors.isAgreed && (
                  <Text className="text-errors text-[18px] font-Urbanist-Medium">
                    *
                  </Text>
                )}
              </Text>
            </View>
            <View className="flex flex-row justify-center gap-x-2">
              <Text className="text-white text-[18px] font-Urbanist-Regular">
                Already have an account ?
              </Text>
              <Text className="text-primary text-[18px] font-Urbanist-SemiBold">
                Log in
              </Text>
            </View>
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
              <SignInWithService service={"Google"} onPress={() => promptAsync()}/>
              <SignInWithService service={"Apple"} />
              <SignInWithService service={"Facebook"} />
              <SignInWithService service={"X"} />
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

export default Signup 