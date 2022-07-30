import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function Contact() {
    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>Contact Us</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "white",
        flex: 1 
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center"
    }
})