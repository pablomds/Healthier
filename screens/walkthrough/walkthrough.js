import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import WalkthroughDrawer from '../../components/walkthroughDrawer';

const Walkthrough = () => {

  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const renderImg = () => {
    switch (walkthroughStep) {
      case 0:
        return (
          <Image
            source={require('../../assets/healthierSmartphone1.png')}
            className="w-5/6 h-5/6"
          />
        )
        break;
      case 1:
        return (
          <Image
            source={require('../../assets/healthierSmartphone2.png')}
            className="w-5/6 h-5/6"
          />
        )
        break;
      case 2:
        return (
          <Image
            source={require('../../assets/healthierSmartphone3.png')}
            className="w-5/6 h-5/6"
          />
        )
        break;
    }
  }
  return (
    <View className="flex-1 justify-center items-center relative bg-primary">
      <View className="w-full h-full flex justify-center items-center">
        {renderImg()}
      </View>
      <View className="flex absolute bottom-0 w-full h-1/3 justify-center items-center">
        <WalkthroughDrawer walkthroughStep={walkthroughStep} setWalkthroughStep={setWalkthroughStep} />
      </View>
    </View>
  )
}

export default Walkthrough 