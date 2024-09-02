import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import ResultScreen from './screens/ResultScreens.js';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Calcular Consumo' }} />
          <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Resultado' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}