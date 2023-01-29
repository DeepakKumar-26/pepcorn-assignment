import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';

import AllUsers from './app/screens/AllUsers'
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './app/navigators/TopTabNavigator';
import StackNavigator from './app/navigators/StackNavigator';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </PaperProvider>
    
  )
}
