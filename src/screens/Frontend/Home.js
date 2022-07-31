import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
export default function Home() {

    return (
        <View style={[styles.flexContainer, { paddingHorizontal: 12 }]}>
            <View style={[styles.box, styles.flexCenter]}>
                <Text style={styles.h1}>Home</Text>
            </View>
            <View style={styles.button}>
                <Button title='Go To About ' onPress={() => { (alert("Working")) }} />
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
    flexCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    box: {
        width: 250,
        height: 250,
        backgroundColor: "#b2bec3",
        borderRadius: 10,
        borderWidth: 5,
        borderBottomColor: "#a0e426",
        borderTopColor: "#390099",
        borderLeftColor: "#fa7921",
        borderRightColor: "#9b52de"
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    button: {
        marginTop: 12,
    }
})