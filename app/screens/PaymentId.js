import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';

export default function PaymentId({navigation, route}) {
  const {pay_id} = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://devapi.pepcorns.com/api/test/getPayment/${pay_id}`)
      .then(response => {
        setData(response.data.response[0]);
        console.log(response);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  if (error)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center'}}>Some Error Occurred</Text>
      </View>
    );

  return (
    <View>
      <View
        style={{
          backgroundColor: '#ADA2ee',
          padding: 10,
          margin: 5,
          borderRadius: 10,
          elevation: 3,
        }}>
        <Text>User Id : {data.user_id}</Text>
        <Text>User Name : {data.name}</Text>
        <Text>Age : {data.age}</Text>
        <Text>Pay id : {data.pay_id}</Text>
        <Text>pay_ref : {data.pay_ref}</Text>
        <Text>amount : {data.amount}</Text>
        <Text>Status : {data.status == 0 ? 'Failed' : 'Active'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
