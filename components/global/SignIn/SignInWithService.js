import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AppleIconSVG from "../../../assets/AppleIcon.svg";
import GoogleIconSVG from "../../../assets/google.svg";
import FacebookIconSVG from "../../../assets/FacebookIcon.svg";
import XIconSVG from "../../../assets/XIcon.svg";

export const SignInWithService = ({ service, onPress }) => {
    const GetServiceIcon = () => {
      switch (service) {
        case "Apple":
          return <AppleIconSVG />;
        case "Google":
          return <GoogleIconSVG />;
        case "Facebook":
          return <FacebookIconSVG />;
        case "X":
          return <XIconSVG />;
      }
    };
  return (
    <TouchableOpacity onPress={onPress} className="w-full mb-5 h-16 px-6 flex flex-row justify-start items-center rounded-full  bg-secondary-dark border-2 border-secondary-medium">
      <GetServiceIcon />
      <Text className="text-xl text-white ml-12 font-Urbanist-Regular">
        {" "}
        Continue with {service}
      </Text>
    </TouchableOpacity>
  );
};