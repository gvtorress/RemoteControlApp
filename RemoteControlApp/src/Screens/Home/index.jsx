import React from 'react'

import { View } from 'react-native'
import { SendText } from '../../Components/SendText'
import { Programs } from '../../Components/Programs'

import { theme } from '../../global/@styles/theme'

import { styles } from './styles'

export function Home() {
    const { iconBackground, twitchBackground, googleBackground, youtubeBackground} = theme.colors
    
    return (
        <View style={styles.container}>
            <View>
                <SendText></SendText>
                <View>
                    <Programs color={youtubeBackground}/>
                </View>
            </View>
        </View>
    )
}
