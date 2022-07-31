import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
export default function About({ navigation }) {
    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>About Us</Text>
            <Button title='Go To Conatct' onPress={() => { navigation.navigate("Contact") }} />
        </View>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    }
})