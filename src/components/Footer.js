import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        backgroundColor: "green",
        paddingVertical: 20,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    }
})