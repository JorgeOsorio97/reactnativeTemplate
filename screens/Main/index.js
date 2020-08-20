// React
import React from 'react'

// RN
import {StyleSheet, Text, View, SafeAreaView} from "react-native";

// Elements
import { Button } from 'react-native-elements'

const MainScreen = (props) => {
    return (
        <SafeAreaView style={styles.safecontainer}>
            <Text>Main</Text>
            <Button title='Holis'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safecontainer: {
        flex:1
    }
});

export default MainScreen;