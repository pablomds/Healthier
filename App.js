import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough  from './screens/walkthrough/walkthrough.js';
import Login from './screens/login/login.js';
import Access from './screens/access/access.js';
import Signup from "./screens/signup/signup.js";
import "./global.css"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
