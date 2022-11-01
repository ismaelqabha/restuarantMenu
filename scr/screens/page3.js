import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CardComp from '../components/cardComponent';
import React, {useContext, useState} from 'react';
import {calcAmount} from '../utils/utils';
import MenuContext from '../../store/menuContext';

const page2 = () => {
  const {total} = useContext(MenuContext);
  const [supmited, setSupmited] = useState(false);

  const onPressHandler = () => {
    setSupmited(!supmited);
  };
  const renderCards = () => {
    const arr = [
      {
        text: 'Shawarma',
        src: require('../../assets/shawrm.png'),
        value: 35,
      },
      {
        text: 'Burger',
        src: require('../../assets/burger.png'),
        value: 25,
      },
      {
        text: 'Falafel',
        src: require('../../assets/falafel.png'),
        value: 10,
      },
      {
        text: 'Hot Dog',
        src: require('../../assets/hotdog.png'),
        value: 10,
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
        <Text style={styles.Amounttext}>{'Amount: ' + calcAmount(total)}</Text>
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

export default page2;
