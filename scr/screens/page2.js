import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import CardComp from '../../cardComponent';
import React, { useState } from 'react';


const drinks = () => {

  const [supmited, setSupmited] = useState(false);

  const onPressHandler = () => {
    setSupmited(!supmited);

  }
  const renderCards = () => {
    const arr = [
      {
        text: 'Coffee',
        src: require('../../assets/coffe.png'),
        value: 12,
      },
      {
        text: 'Tea',
        src: require('../../assets/tea.png'),
        value: 13,
      },
      {
        text: 'Nescafe',
        src: require('../../assets/nescafe.png'),
        value: 15,
      },
      {
        text: 'Cappuccino',
        src: require('../../assets/cappu.png'),
        value: 14,
      },
    ]

    const cardsArray = arr.map(card => {
      return <CardComp onPressFunction={onPressHandler} {...card} />
    })
    return cardsArray;
  }


  return (
    <ScrollView
      contentContainerStyle={styles.container}>
      {renderCards()}
      <View style={styles.card}>
        <Text style={styles.Amounttext}>Amount: </Text>
        <Text style={styles.Amounttext}>00 </Text>
      </View>
    </ScrollView>
  )



}
const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Amounttext: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    flexDirection: 'row',
  },


});

export default drinks;