import { StatusBar } from 'react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Home } from './src/Screens/Home/index.jsx'
import { Background } from './src/Components/Background/index.jsx'
import { Mouse } from './src/Screens/Mouse/index.jsx'
import { AppRoutes } from './src/routes/app.routes.jsx'

export default function App() {
    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <AppRoutes />
        </Background>
    )
}
