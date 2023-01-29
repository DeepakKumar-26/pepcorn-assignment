import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerHeader = props => {
  return (
    <View style={{height: 150, justifyContent: 'center',backgroundColor:'#AAE3E2',}}>
      <Image
        source={require('../assets/detective.png')}
        resizeMode="contain"
        style={{height: 100, aspectRatio: 1, alignSelf: 'center',borderRadius:100,backgroundColor:'white',}}
      />
    </View>
  );
};
export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
