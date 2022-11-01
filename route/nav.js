import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import page1 from "../scr/screens/pag1";
import page2 from "../scr/screens/page2";
import page3 from "../scr/screens/page3";
import { ScreenNames } from "./ScreensNames";

const MainNavigation = (props) => {
    //const Stack = createNativeStackNavigator();
    const Tap = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tap.Navigator>
                <Tap.Screen name = {ScreenNames.page1} component={page1}/>
                <Tap.Screen name = {ScreenNames.page2} component={page2}/>
                <Tap.Screen name = {ScreenNames.page3} component={page3}/>
            </Tap.Navigator>
        </NavigationContainer>
    )
};

export default MainNavigation;