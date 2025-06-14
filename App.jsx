import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavYolo from './src/Yolo/AppNavYolo'

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavYolo />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})