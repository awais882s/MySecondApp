import React from 'react'
import { ScrollView, View, Button, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import logo from "../../Assets/Images/logo.jpg";
export default function Gallery() {
    return (

        <View style={[styles.flexContainer, { paddingVertical: 40 }]}>
            <View style={[styles.box, styles.flexCenter]}>
                <Image style={styles.image} source={logo} />
                {/* another methods to use images
                source={require("../../Assets/Images/logo.jpg")} */}
                {/* <Text style={styles.h1}>Gallery</Text> */}
            </View>
            <Button title="Click Me" color="red" onPress={() => { (alert("Clicked")) }} />
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.button} onPress={() => { (alert("Touchable HighLight")) }} underlayColor="green" >
                <Text>
                    Touchable HighLight
                </Text>
            </TouchableHighlight>
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
        justifyContent: "center",
        marginTop: 10,
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    box: {
        marginBottom: 8,
        width: 250,
        height: 250,
        backgroundColor: "#efb094",
        borderRadius: 10,
        borderWidth: 5,
        borderBottomColor: "#a0e426",
        borderTopColor: "#390099",
        borderLeftColor: "#fa7921",
        borderRightColor: "#9b52de"

    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 4,
        color: "black",
        backgroundColor: "#efb094",
        marginTop: 12,
    },
})