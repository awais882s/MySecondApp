import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
export default function Contact({ navigation }) {
    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>Contact Us</Text>
            <Button title="Go to About" onPress={() => { navigation.navigate("About") }} />
            <View style={{ marginTop: 20 }}>
                <Button title="Go to Back" onPress={() => { navigation.goBack() }} />
            </View>
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