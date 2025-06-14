import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const YoloGenie = () => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0D0D0D'} />
            <SafeAreaView style={styles.mainContainer}>
            </SafeAreaView>
        </>
    )
}

export default YoloGenie

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0D0D0D'
    },
})