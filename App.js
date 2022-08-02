import React from 'react'
// import Frontend from './src/screens/Frontend';
import { StatusBar } from 'react-native';
import AppNavigators from './src/navigations/AppNavigators';
// import Home from './src/screens/Frontend/Home'
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7d5fff" barStyle="dark-content" />
      <AppNavigators />
      {/* <Frontend /> */}
    </> 
  )
}
