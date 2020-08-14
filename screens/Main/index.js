// React
import React from 'react'

// RN
import {StyleSheet, Text, View, SafeAreaView} from "react-native";

const MainScreen = (props) => {
    return (
        <SafeAreaView style={styles.safecontainer}>
            <Text>Main</Text>
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