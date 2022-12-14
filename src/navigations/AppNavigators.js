import React from 'react'
import { Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Frontend/Home"
import About from "../screens/Frontend/About"
import Contact from "../screens/Frontend/Contact"
import Footer from '../components/Footer';
import Header from "../components/Header"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Auth/Login';
import { useAuthContext } from '../contexts/AuthContexts';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name='About' component={About} initialParams={{ name: "Awais S", age: "20", id: "882" }}
                options={{
                    tabBarShowLabel: "false",
                    tabBarLabel: "Groups",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="users" color={color} size={size} />
                    ),
                    tabBarBadge: 882,

                }}
            />
            <Tab.Screen name="Contact" component={Contact}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
        </Tab.Navigator>
    );
}
const LogoImage = () => {
    return <Image source={require("../Assets/Images/logo.jpg")} style={{ width: 205, height: 25 }} />
}
export default function AppNavigators() {
    const { isAuthenticated } = useAuthContext()
    console.log(isAuthenticated);
    return (
        <NavigationContainer>
            {/* <MyTabs /> */}
            {/* <Header /> */}
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    // headerTintColor: "red",
                    headerTitleStyle: { fontWeight: "bold", color: "red" },
                    // headerShown: false
                }}
                initialRouteName="Login"
            >
                {
                    isAuthenticated ?
                        <Stack.Group>
                            <Stack.Screen name="Home" options={{
                                headerTitle: "My Home"
                                ,
                                headerTitleAlign: "center"
                            }} component={Home} />
                            <Stack.Screen name="About" component={About}
                                initialParams={{ name: "Awais S", age: "30", id: "882" }}

                                options={{
                                    headerTitle: () => <LogoImage />,
                                    headerRight: () => (
                                        <Button
                                            onPress={() => alert('This is a button!')}
                                            title="Info"
                                        // color="pink"
                                        />
                                    )
                                }}
                            />
                        </Stack.Group>
                        :
                        <Stack.Group>
                            <Stack.Screen name="Login" component={Login} />
                        </Stack.Group>
                }
            </Stack.Navigator>
            {/* <Footer /> */}
        </NavigationContainer>
    )
}