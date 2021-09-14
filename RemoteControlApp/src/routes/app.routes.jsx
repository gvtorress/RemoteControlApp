import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { theme } from '../global/@styles/theme';

import { Home } from '../Screens/Home';
import { Mouse } from '../Screens/Mouse';
import { IPSignIn } from '../Screens/IPSignIn';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: theme.colors.background
                    }
                }}
            >
                <Screen
                    name="IPSignIn"
                    component={IPSignIn}
                />
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="Mouse"
                    component={Mouse}
                />
            </Navigator>
        </NavigationContainer>
    )
}