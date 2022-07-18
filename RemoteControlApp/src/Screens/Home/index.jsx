import React, { useEffect } from 'react'

import { View, ScrollView } from 'react-native'
import { SendText } from '../../Components/SendText'
import { Programs } from '../../Components/Programs'
import { Button } from '../../Components/Button'
import { DoubleButton } from '../../Components/DoubleButton'
import { MovieButton } from '../../Components/MovieButton'

import axios from 'axios'

import { theme } from '../../global/@styles/theme'

import { styles } from './styles'

export function Home() {
    const {
        iconBackground,
        twitchBackground,
        googleBackground,
        youtubeBackground
    } = theme.colors

    useEffect(() => {
        axios.defaults.timeout = 10000
    }, [])

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            scrollEnabled="false"
            keyboardShouldPersistTaps="never"
        >
            <View>
                <SendText screen="Home" />
                <View style={styles.buttons}>
                    <DoubleButton
                        aboveicon={require('../../Assets/addIcon.png')}
                        belowicon={require('../../Assets/minusIcon.png')}
                        text="Volume"
                    />
                    <View>
                        <Button
                            icon={require('../../Assets/fullScreenIcon.png')}
                            text="Full Screen"
                        />
                        <Button
                            icon={require('../../Assets/muteIcon.png')}
                            text="Mute"
                        />
                    </View>
                    <View>
                        <Button
                            icon={require('../../Assets/theaterModeIcon.png')}
                            text="Theater Mode"
                        />
                        <Button
                            icon={require('../../Assets/changeProgramIcon.png')}
                            text="Change Program"
                        />
                    </View>
                    <DoubleButton
                        aboveicon={require('../../Assets/addIcon.png')}
                        belowicon={require('../../Assets/minusIcon.png')}
                        text="Channel"
                    />
                </View>
                <View style={styles.buttons}>
                    <Button
                        icon={require('../../Assets/moveMouseIcon.png')}
                        text="Mouse"
                    />
                    <Button
                        icon={require('../../Assets/changeScreenIcon.png')}
                        text="Change Screen"
                    />
                    <Button
                        icon={require('../../Assets/reloadIcon.png')}
                        text="Reload"
                    />
                    <Button
                        icon={require('../../Assets/closeTabIcon.png')}
                        text="Close"
                    />
                </View>
                <View style={styles.buttons}>
                    <MovieButton
                        icon={require('../../Assets/rewindIcon.png')}
                        text="Rewind"
                    />
                    <MovieButton
                        icon={require('../../Assets/playIcon.png')}
                        text="Play"
                    />
                    <MovieButton
                        icon={require('../../Assets/pauseIcon.png')}
                        text="Pause"
                    />
                    <MovieButton
                        icon={require('../../Assets/forwardIcon.png')}
                        text="Forward"
                    />
                </View>
                <View style={{ marginTop: 50 }}></View>
                <View style={styles.programs}>
                    <Programs
                        color={iconBackground}
                        text="Netflix"
                        icon={require('../../Assets/netflix.png')}
                    />
                    <Programs
                        color={twitchBackground}
                        text="Twitch"
                        icon={require('../../Assets/twitch.png')}
                    />
                    <Programs
                        color={googleBackground}
                        text="Google"
                        icon={require('../../Assets/google.png')}
                    />
                </View>

                <View style={styles.programs}>
                    <Programs
                        color={iconBackground}
                        text="Espn"
                        icon={require('../../Assets/espn.png')}
                    />
                    <Programs
                        color={youtubeBackground}
                        text="Youtube"
                        icon={require('../../Assets/youtube.png')}
                    />
                    <Programs
                        isAmazon
                        color={iconBackground}
                        text="Prime Video"
                        icon={require('../../Assets/amazonprimevideo.png')}
                    />
                </View>
                <View style={styles.programs}>
                    <Programs
                        color={googleBackground}
                        text="Star+"
                        icon={require('../../Assets/starplus.png')}
                    />
                    <Programs
                        isAmazon
                        color={iconBackground}
                        text="Disney+"
                        icon={require('../../Assets/disneyplus.png')}
                    />
                    <Programs
                        isAmazon
                        color={iconBackground}
                        text="HBO Max"
                        icon={require('../../Assets/hbomax.png')}
                    />
                </View>
                
            </View>
        </ScrollView>
    )
}
