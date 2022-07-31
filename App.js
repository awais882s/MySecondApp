import React from 'react'
import Frontend from './src/screens/Frontend';
import { StatusBar } from 'react-native';
// import Home from './src/screens/Frontend/Home'
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7d5fff" barStyle="dark-content" />
      <Frontend />
    </>
  )
}
