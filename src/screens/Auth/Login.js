import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Login() {
    return (
        <View style={styles.flexCenter}>
            <Text style={styles.h1}>Login</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontSize: 48,
        color: "white"
    }
})