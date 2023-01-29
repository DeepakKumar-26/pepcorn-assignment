import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentId from '../screens/PaymentId';
import User from '../screens/User';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopTabNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PaymentId" component={PaymentId} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
