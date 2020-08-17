// React
import React from 'react'

// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import MainScreen from "../screens/Main";
import AddVisitScreen from "../screens/AddVisit";
import ListVisitScreen from "../screens/ListVisit";

const MainNavigator = createDrawerNavigator();

const MainStack = () => {
    return (
        <MainNavigator.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
            <MainNavigator.Screen name="Main" component={MainScreen}/>
            <MainNavigator.Screen name="AddVisit" component={AddVisitScreen}/>
            <MainNavigator.Screen name="ListVisit" component={ListVisitScreen}/>
        </MainNavigator.Navigator>
    )
}

export default MainStack;