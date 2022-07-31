import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Frontend/Home"
import About from "../screens/Frontend/About"
import Contact from "../screens/Frontend/Contact"
import Footer from '../components/Footer';

const Stack = createNativeStackNavigator();

export default function AppNavigators() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    headerTitleStyle: { fontWeight: "bold" }
                }}
            >
                <Stack.Screen name="Home" options={{
                    headerTitle: "My Home"
                    ,
                    headerTitleAlign: "center"
                }} component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
            <Footer />
        </NavigationContainer>
    )
}