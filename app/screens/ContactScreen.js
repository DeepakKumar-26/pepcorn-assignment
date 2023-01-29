import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactScreen() {
  return (
    <View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'lightgrey',
        }}>
        <Text>Name : Deepak Kumar</Text>
        <Text>email : deepak.dakshana17@gmail.com</Text>
        <Text>Mobile : 9131884866</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
