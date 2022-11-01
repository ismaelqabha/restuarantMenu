import React, {useContext, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import MenuContext from '../../store/menuContext';

const cardComp = props => {
  const {total, setTotal} = useContext(MenuContext);

  const onPressHandler = () => {
    props.navigate('page1', {ammount});
  };

  const [counter, setCounter] = useState(0);
  const [amm, setAmount] = useState(0);

  const sum = counter * props.value;

  const onAddPress = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    setTotal({
      ...total,
      [props.text]: {
        qty: newCount,
        price: props.value,
        totalPrice: newCount * props.value,
      },
    });
  };

  return (
    <View style={styles.card}>
      <Image source={props.src} style={styles.image} />
      <View style={styles.nestedview}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.calc}>
          <Text style={styles.text}>Qty</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={3}
            value={counter + ''}
            onChangeText={val => setCounter(parseInt(val || 0))}
          />
          <Text style={styles.text}>Pric</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={props.value + ''}
            editable={false}
          />
        </View>
        <Text style={styles.text}>{sum}</Text>
        <Pressable
          android_ripple={{color: 'white'}}
          onPress={() => onAddPress()}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ddddd' : 'gray'},
            styles.button,
          ]}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nestedview: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  calc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    borderWidth: 5,
    borderColor: 'black',
    margin: 20,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginRight: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },

  button: {
    width: 150,
    height: 25,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 10,
    color: 'red',
  },
});

export default cardComp;
