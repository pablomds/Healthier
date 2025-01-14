import React from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough  from './screens/walkthrough/walkthrough.js';
import Login from './screens/login/login.js';
import Access from './screens/access/access.js';
import Signup from "./screens/signup/signup.js";
import "./global.css";
import SignupQuizz from './screens/signupQuizz/signupQuizz.js';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Urbanist-Black': require('./assets/fonts/Urbanist-Black.ttf'),
    'Urbanist-BlackItalic': require('./assets/fonts/Urbanist-BlackItalic.ttf'),
    'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-BoldItalic': require('./assets/fonts/Urbanist-BoldItalic.ttf'),
    'Urbanist-ExtraBold': require('./assets/fonts/Urbanist-ExtraBold.ttf'),
    'Urbanist-ExtraBoldItalic': require('./assets/fonts/Urbanist-ExtraBoldItalic.ttf'),
    'Urbanist-ExtraLight': require('./assets/fonts/Urbanist-ExtraLight.ttf'),
    'Urbanist-ExtraLightItalic': require('./assets/fonts/Urbanist-ExtraLightItalic.ttf'),
    'Urbanist-Italic': require('./assets/fonts/Urbanist-Italic.ttf'),
    'Urbanist-LightItalic': require('./assets/fonts/Urbanist-LightItalic.ttf'),
    'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-MediumItalic': require('./assets/fonts/Urbanist-MediumItalic.ttf'),
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-SemiBold': require('./assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-SemiBoldItalic': require('./assets/fonts/Urbanist-SemiBoldItalic.ttf'),
    'Urbanist-Thin': require('./assets/fonts/Urbanist-Thin.ttf'),
    'Urbanist-ThinItalic': require('./assets/fonts/Urbanist-ThinItalic.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupQuizz" component={SignupQuizz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
