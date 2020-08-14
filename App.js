// React
import React, {useState} from 'react';

// Expo
import {StatusBar} from 'expo-status-bar';

// Redux
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './redux/reducers'

// RN
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import LogInStack from './navigation/LogInStack';
import MainStack from './navigation/MainStack';

const store = createStore(reducers)

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <Provider store={store}>
            <NavigationContainer>
                {isLoggedIn?
                    <MainStack></MainStack>
                :
                    <LogInStack></LogInStack>
                }
            </NavigationContainer>
            <StatusBar hidden={true}/>
        </Provider>
    );
}


