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

// Elements
import { ThemeProvider } from 'react-native-elements'
import theme, { navigationTheme, colors } from './theme'

const store = createStore(reducers)

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <NavigationContainer theme={navigationTheme}>
                        {isLoggedIn
                            ? <MainStack></MainStack>
                            : <LogInStack></LogInStack>
                        }
                </NavigationContainer>
                <StatusBar hidden={true}/>
            </ThemeProvider>
        </Provider>
    );
}


const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: colors.mainBg,
    },
});
