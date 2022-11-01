import React from "react";
import { View, Text, Button, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'
import { ScreenNames } from "../../route/ScreensNames";
import CardComp from '../../cardComponent';


const page1 = ({props}) => {

   // const {ammount} = route.params;

    return (
        <ImageBackground source={require('../../assets/appback.png')} style={styles.container}>
        {/* <View style={styles.container}> */}
            <Text style={styles.text}>Restuarant Menu</Text>

            <View style={styles.card}>
                <Text style={styles.text}>The amount is: </Text>
            </View>
       {/* </View> */}
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    card: {
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'red',
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