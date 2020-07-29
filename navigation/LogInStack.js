// React
import React from 'react'

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import LogInScreen from "../screens/LogIn";

const LogInStackNavigator = createStackNavigator();

const LogInStack = () => {
    return (
        <LogInStackNavigator.Navigator initialRouteName="LogIn" screenOptions={{headerShown:false}}>
            <LogInStackNavigator.Screen name="LogIn" component={LogInScreen}/>
        </LogInStackNavigator.Navigator>
    )
}

export default LogInStack;