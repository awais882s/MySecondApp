import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.Footer}>
            <Text style={style.Text}>Footer</Text>
        </View>
    )
}
const style = StyleSheet.create({
    Footeer: {
        backgroundColor: "green",
        paddingVertical: 20
    },
    Text: {
        alignItems: "center",
        color: "white"
    }
})