import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Home({ navigation }) {
    const handlePress = () => {
        Alert.alert(
            "Login Successful",
            "Here is Your Todo",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
    return (
        <View style={[styles.flexContainer, { paddingHorizontal: 12 }]}>
            <View style={[styles.box, styles.flexCenter]}>
                <Text style={styles.h1} >Home <Icon name="home" size={32} /></Text>
            </View>
            <View style={styles.button}>
                <Button title='Go To About' onPress={() => { navigation.navigate("About", { name: "AWAIS S", id: "123", age: 21 }) }} />
            </View>
            <View style={styles.flexCenter}>
                <TouchableOpacity style={styles.buttons} onPress={handlePress}>
                    <Text style={{ color: "white", textAlign: "center" }}>Add Todo <Icon name='plus' /> </Text>
                </TouchableOpacity>
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
    },
    buttons: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: "red",
        width: 300,
        borderRadius: 8,
        marginTop: 7,


    }
})