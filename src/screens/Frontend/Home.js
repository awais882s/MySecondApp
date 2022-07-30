import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
export default function Home() {

    const items = [
        { id: '0', text: 'View' },
        { id: '1', text: 'Text' },
        { id: '2', text: 'Image' },
        { id: '3', text: 'ScrollView' },
        { id: '4', text: 'ListView' },
    ]
    return (

        <View style={[styles.flexContainer , styles.flexCenter]}>
            <FlatList
                style={styles.flexContainer}
                data={items}
                renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
                keyExtractor={(item) => item.id}
            />
            {/* <View style={[styles.box, styles.flexCenter]}>
                <Text style={styles.h1}>Home</Text>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "white",
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
        backgroundColor: "#00bbf9",
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
})