import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
export default function About({ navigation, route }) {
    const { name, id, age } = route.params
    console.log(name, id, age)
    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>About Us</Text>
            <Text style={styles.h3}>Name:{name}</Text>
            <Text style={styles.h3}>Age:{age}</Text>
            <Text style={styles.h3}>Id:{id}</Text>
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
    },
    h3: {
        fontSize: 20,
        fontWeight: "bold",
    }
})