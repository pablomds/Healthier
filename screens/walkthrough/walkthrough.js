import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import WalkthroughDrawer from "../../components/walkthroughDrawer";
import { Dimensions } from "react-native";

const Walkthrough = ({ navigation }) => {
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const SmarthphoneStyle = {
    height: windowHeight * 0.8,
    width: windowWidth * 0.85,
  };
  const renderImg = () => {
    switch (walkthroughStep) {
      case 0:
        return (
          <Image
            source={require("../../assets/healthierSmartphone1.png")}
            style={SmarthphoneStyle}
          />
        );
        break;
      case 1:
        return (
          <Image
            source={require("../../assets/healthierSmartphone2.png")}
            style={SmarthphoneStyle}
          />
        );
        break;
      case 2:
        return (
          <Image
            source={require("../../assets/healthierSmartphone3.png")}
            style={SmarthphoneStyle}
          />
        );
        break;
    }
  };

  return (
    <View className="flex-1  justify-center items-center bg-primary">
        <View className="w-full h-full flex justify-center items-center">
          {renderImg()}
        </View>
        <View className="flex absolute bottom-0 w-full h-1/2 justify-center items-center z-10">
          <WalkthroughDrawer
            walkthroughStep={walkthroughStep}
            setWalkthroughStep={setWalkthroughStep}
            navigation={navigation}
          />
        </View>
    </View>
  );
};

export default Walkthrough;
