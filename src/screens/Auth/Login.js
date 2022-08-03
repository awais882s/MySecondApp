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
        </View>
    )
}
const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    h1: {
        fontSize: 48,
        color: "black"
    }
})