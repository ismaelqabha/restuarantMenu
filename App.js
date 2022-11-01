/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';
import CardComp from './cardComponent';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Image,
  I18nManager,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './route/nav';


const App = () => {
  I18nManager.allowRTL(false);

  const [qty, setqty] = useState('');
  const [supmited, setSupmited] = useState(false);

  

  const onPressHandler = () => {
    setSupmited(!supmited);
    setqty();
  }

  const renderCards = () => {
    const arr = [
      {
        text: 'Coffee',
        src: require('./assets/coffe.png'),
        value: 12,
      } ,
      {
        text: 'Tea',
        src: require('./assets/tea.png'),
        value: 13,
      } ,
      {
        text: 'Nescafe',
        src: require('./assets/nescafe.png'),
        value: 15,
      } ,
      {
        text: 'Cappuccino',
        src: require('./assets/cappu.png'),
        value: 14,
      } ,
    ]

    const cardsArray =  arr.map(card => {
      return <CardComp onPressFunction={onPressHandler} {...card}/>
    })
    return cardsArray ; 
  }


  return (
    // <ScrollView
    //   contentContainerStyle={styles.container}>
    //     {renderCards()}
    // </ScrollView>

    <View style = {{flex:1}}>
      <MainNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',

  },
  

});

export default App;
