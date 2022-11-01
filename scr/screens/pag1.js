import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {ScreenNames} from '../../route/ScreensNames';
import CardComp from '../components/cardComponent';
import MenuContext from '../../store/menuContext';
import {calcAmount} from '../utils/utils';
import ReceptComponent from '../components/receptComponent';

const page1 = ({props}) => {
  // const {ammount} = route.params;
  const {total} = useContext(MenuContext);

  const params = {
    menuHeader: {
      itemName: 'Name',
      price: 'price',
      qty: 'qty',
      totalPrice: 'totalPrice',
    },
  };

  const renderItems = () => {
    const totalKeys = Object.keys(total);
    return totalKeys.map(key => {
      console.log(total[key]);
      return <ReceptComponent itemName={key} {...total[key]} />;
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/appback.png')}
      style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.text}>Restuarant Menu</Text>
      <ReceptComponent {...params.menuHeader} />
      {renderItems()}
      <View style={styles.card}>
        <Text style={styles.text}>{'The amount is: ' + calcAmount(total)}</Text>
      </View>
      {/* </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
});

export default page1;
