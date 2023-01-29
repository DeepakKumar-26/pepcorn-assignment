import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllUsers from '../screens/AllUsers';
import AllPayments from '../screens/AllPayments';

const Tab = createMaterialTopTabNavigator();
export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllUsers" component={AllUsers} options={{title:'All Users'}} />
      <Tab.Screen name="AllPayments" component={AllPayments}options={{title:'All Payments'}} />
    </Tab.Navigator>
  );
}


