import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useAuthContext } from '../../contexts/AuthContexts'
const intialState = { email: "", password: "" }

export default function Login() {
    const { dispatch } = useAuthContext()
    const [state, setState] = useState(intialState)
    const handleChange = (name, val) => {
        setState(s => ({ ...s, [name]: val }))
    }
    const handleLogin = () => {
        const { email, password } = state;
        console.log(email);
        console.log(password);
        dispatch({ type: "LOGIN" })
    }
    return (
        <View style={styles.flexCenter}>
            <Text style={styles.h1}>Login</Text>
            <TextInput
                style={styles.formControl}
                placeholder="Enter Your email"
                placeholderTextColor="white"
                keyboardType="email-address"
                onChangeText={val => (handleChange("email", val))}
            />
            <TextInput
                style={styles.formControl}
                placeholder="Enter Your password"
                placeholderTextColor="white"
                secureTextEntry
                onChangeText={val => (handleChange("password", val))}
            />
            <View style={{ width: "100%" }}>
                <Button title="Login" color="#ef476f" onPress={handleLogin} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#14213d",
        paddingHorizontal: 10
    },
    h1: {
        fontSize: 40,
        color: "white",
        marginBottom: 24,
    },
    formControl: {
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        borderColor: "#e5e5e5",
        width: "100%",
        color: "white",
        fontSize: 22,
    }
})