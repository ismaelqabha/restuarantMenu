import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CardComp from '../components/cardComponent';
import React, {useContext, useState} from 'react';
import MenuContext from '../../store/menuContext';
import {calcAmount} from '../utils/utils';

const drinks = () => {
  const {total} = useContext(MenuContext);
  const [supmited, setSupmited] = useState(false);
  const [amount, setAmount] = useState({});

  const onPressHandler = () => {
    setSupmited(!supmited);
  };

  const renderCards = () => {
    const arr = [
      {
        text: 'Coffee',
        src: require('../../assets/coffe.png'),
        value: 12,
        onValueChane: val => {
          setAmount({...amount, Coffee: val});
        },
      },
      {
        text: 'Tea',
        src: require('../../assets/tea.png'),
        value: 13,
        onValueChane: val => {
          setAmount({...amount, Tea: val});
        },
      },
      {
        text: 'Nescafe',
        src: require('../../assets/nescafe.png'),
        value: 15,
        onValueChane: val => {},
      },
      {
        text: 'Cappuccino',
        src: require('../../assets/cappu.png'),
        value: 14,
        onValueChane: val => {},
      },
    ];

    const cardsArray = arr.map(card => {
      return <CardComp onPressFunction={onPressHandler} {...card} />;
    });
    return cardsArray;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderCards()}
      <View style={styles.card}>
        <Text style={styles.Amounttext}>{'Amount:' + calcAmount(total)}</Text>
      </View>
    </ScrollView>
  );
};
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
