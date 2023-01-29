import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ActivityIndicator, DataTable} from 'react-native-paper';

const ListHeaderComponent = ({item}) => {
  return (
    <DataTable.Row style={{}}>
      <DataTable.Title>Pay Id</DataTable.Title>
      <DataTable.Title>Amount</DataTable.Title>
      <DataTable.Title>Pay_ref</DataTable.Title>
    </DataTable.Row>
  );
};

const ListItem = ({item}) => {
  return (
    <DataTable.Row style={{}}>
      <DataTable.Cell style={{flex: 1}}>{item.pay_id}</DataTable.Cell>
      <DataTable.Cell style={{flex: 1}}>{item.amount}</DataTable.Cell>
      <DataTable.Cell style={{flex: 1}}>{item.pay_ref}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default function User({navigation, route}) {
  const {user_id} = route.params;
  const [user, setUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://devapi.pepcorns.com/api/test/getUserById/${user_id}`,
      );
      setUser(response.data.response[0]);
      setPayments(response.data.response);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUserDetails();
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
      <View style={styles.card}>
        <Text>User ID : {user.user_id}</Text>
        <Text>Name : {user.name}</Text>
        <Text>Age : {user.age}</Text>
      </View>
      <FlatList
        data={payments}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={({item}) => <ListHeaderComponent item={item} />}
        renderItem={({item}) => <ListItem item={item} />}
        contentContainerStyle={[styles.card, {backgroundColor: '#AAE3E2'}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ADA2ee',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    elevation: 3,
  },
});
