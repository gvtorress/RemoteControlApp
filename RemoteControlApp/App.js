import { StatusBar } from 'react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Home } from './src/Screens/Home/index.jsx'
import { Background } from './src/Components/Background/index.jsx'

export default function App() {
    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Home></Home>
        </Background>
        // <View style={styles.container}>
        //   <Text>Open up App.js to start working on your app!</Text>
        //   <StatusBar style="auto" />
        // </View>
    )
}
