import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <View style={{padding: 10}}>
      <View>
        <Text style={{fontWeight: 'bold'}}>PEPCORN</Text>
        <Text>
          This app is build for the purpose of completing the assignment task
          given by PEPCORNS
        </Text>
        <Text style={{fontWeight: 'bold'}}>Functionality</Text>
        <Text>
          1. On selecting "ALL USERS" tab user can see the list of users fetched
          from the API : https://devapi.pepcorns.com/api/test/getAllUsers.
        </Text>
        <Text>
          2. On selecting "ALL PAYMENTS" tab user can see the list of payments
          fetched from the API :
          https://devapi.pepcorns.com/api/test/getAllPayments
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
