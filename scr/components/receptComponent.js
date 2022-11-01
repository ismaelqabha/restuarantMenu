import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReceptComponent = props => {
  const {itemName, price, qty, totalPrice} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemName}</Text>
      <Text style={styles.text}>{price}</Text>
      <Text style={styles.text}>{qty}</Text>
      <Text style={styles.text}>{totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom:10
  },
  text: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
    flex:1
  },
});

export default ReceptComponent;
