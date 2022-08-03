import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
const intialState = { email: "", password: "" }

export default function Login() {
    const [state, setState] = useState(intialState)
    const handleChange = () => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }
    return (
        <View style={styles.flexCenter}>
            <Text style={styles.h1}>Login</Text>
            <TextInput
                style={styles.formControl}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8ad9d",
        paddingHorizontal: 10
    },
    h1: {
        fontSize: 48,
        color: "black"
    },
    formControl: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        borderColor: "red",
        width: "100%"
    }
})