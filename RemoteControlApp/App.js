import { StatusBar } from 'react-native'
import React from 'react'

import { Background } from './src/Components/Background/index.jsx'
import { AppRoutes } from './src/routes/app.routes.jsx'
import { IPSignIn } from './src/Screens/IPSignIn/index.jsx'

export default function App() {
    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {/* <IPSignIn /> */}
            <AppRoutes />
        </Background>
    )
}
