// React
import React from 'react'

// RN
import {StyleSheet, Text, View, SafeAreaView} from "react-native";

const LogInScreen = (props) => {
    return (
        <SafeAreaView style={styles.safecontainer}>
            <Text>Login</Text>
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

export default LogInScreen;