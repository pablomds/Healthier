import React, { useRef, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import { OtpInput } from "react-native-otp-entry";
import GoBackArrow from '../../components/global/GoBackArrow/GoBackArrow';

const EnterOptCode = ({ navigation }) => {
    const [secondsLeft, setSecondsLeft] = useState(60)

    const handleNavigationToForgotPassword = () => navigation.navigate("ForgotPassword");

    const verifyIfOptCodeIsCorrect = async (data) => {
        try {
            console.log('Sent',data)
        } catch (error) {
            console.log("an error has occured", error)
        }
    };

    useEffect(() => {
        // exit early when we reach 0
        if (!secondsLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [secondsLeft]);

    const getFontStyle = (fontClass) => {
        const fonts = {
          "font-Urbanist-Bold": { fontFamily: "font-Urbanist-Bold" },
          // Add more mappings if needed
        };
      
        return fonts[fontClass] || {};
      };
      
  return (
    <View className="flex-1 w-full py-16 bg-secondary relative">
      <GoBackArrow navigationTo={handleNavigationToForgotPassword}></GoBackArrow>
      <View className="flex flex-col py-2 px-6 gap-y-8">
        <View className="flex flex-col gap-y-2">
          <Text className="font-Urbanist-Bold text-[32px]  text-white">
            Enter OTP Code 🔐
          </Text>
          <Text className="font-Urbanist-Regular text-[18px] text-white">
            Please check your email inbox for a message from Asana. Enter the
            one-time verification code below.
          </Text>
        </View>
        <View className="flex flex-col gap-y-2">
          <OtpInput
            numberOfDigits={4}
            onTextChange={(text) => console.log(text)}
            focusColor="#7E6DFC"
            hideStick={true}
            focusStickBlinkingDuration={400}
            onFilled={(text) => verifyIfOptCodeIsCorrect(text)}
            textInputProps={{
                accessibilityLabel: "One-Time Password",
                style: [getFontStyle("font-custom")],
            }}
            theme={{
                pinCodeContainerStyle: {
                    backgroundColor: "#1F222A",
                    width: 83,
                    height: 70,
                    borderRadius: 12,
                    borderColor: "#1F222A",
                },
                pinCodeTextStyle: {
                    color: '#FFFFFF'
                },
                focusedPinCodeContainerStyle: {
                    borderColor: "#7E6DFC",
                }
            }}
          />
        </View>
        <View className='flex flex-col gap-y-4 justify-center items-center'>
            <Text className="font-Urbanist-Regular text-[18px] text-white">You can resend the code in <Text className="text-primary">{secondsLeft}</Text> seconds</Text>
            <TouchableOpacity onPress={() => console.log('resend code')}>
                <Text className="font-Urbanist-Regular text-[18px] text-primary-gray-500">Resend code</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default EnterOptCode