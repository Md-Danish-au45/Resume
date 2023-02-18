import React from 'react'
import HomeScreen from './src/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/Profile';
import { View,Text } from 'react-native';
import Resume from "./src/screens/Resume"
import Skills from "./src/screens/Skills"
const  Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Resume Task' component={HomeScreen}  />
        <Stack.Screen name='Profile' component={Profile}  />
        {/* <Stack.Screen name='Skills' component={Skills}  /> */}
        <Stack.Screen name='Resume' component={Resume}  />
      </Stack.Navigator>
      </NavigationContainer>
    
    
  )
}