import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigator';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>}>
        <Drawer.Screen name='Home' component={TopTabNavigator}/>
        <Drawer.Screen name='About' component={AboutScreen}/>
        <Drawer.Screen name='Contact' component={ContactScreen}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
