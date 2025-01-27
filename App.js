import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { importFonts } from './fonts.config.js';

import Walkthrough  from './screens/walkthrough/walkthrough.js';
import Login from './screens/login/login.js';
import Access from './screens/access/access.js';
import Signup from "./screens/signup/signup.js";
import SignupQuizz from './screens/signupQuizz/signupQuizz.js';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword.js';
import EnterOptCode from './screens/ForgotPassword/EnterOptCode.js';
import ResetPassword from './screens/ForgotPassword/ResetPassword.js';
import ResetPasswordSuccessfull from './screens/ForgotPassword/ResetPasswordSuccessfull.js';

import "./global.css";

const Stack = createStackNavigator();


export default function App() {

  importFonts();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ForgotPassword" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupQuizz" component={SignupQuizz} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EnterOptCode" component={EnterOptCode} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ResetPasswordSuccessfull" component={ResetPasswordSuccessfull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
