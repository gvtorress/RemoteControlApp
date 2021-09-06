import React from 'react'

import { Image, View } from 'react-native'
import { SendText } from '../../Components/SendText'
import { Programs } from '../../Components/Programs'
import { Button } from '../../Components/Button'
import { DoubleButton } from '../../Components/DoubleButton'
import { MovieButton } from '../../Components/MovieButton'
import { MouseMove } from '../../Components/MouseMove'

import { theme } from '../../global/@styles/theme'

import { styles } from './styles'

export function Home() {
    const { iconBackground, twitchBackground, googleBackground, youtubeBackground} = theme.colors
    
    return (
        <View style={styles.container}>
            <View>
                <SendText></SendText>
                <View style={styles.buttons}>
                    <DoubleButton aboveicon={require("../../Assets/addIcon.png")} belowicon={require("../../Assets/minusIcon.png")} text="Volume" />
                    <View>
                        <Button icon={require("../../Assets/fullScreenIcon.png")} text="FullScreen" />
                        <Button icon={require("../../Assets/muteIcon.png")} text="Mute" />
                    </View>
                    <View>
                        <Button icon={require("../../Assets/theaterModeIcon.png")} text="Theater Mode" />
                        <Button icon={require("../../Assets/changeProgramIcon.png")} text="Change Program" />
                    </View>
                    <DoubleButton aboveicon={require("../../Assets/addIcon.png")} belowicon={require("../../Assets/minusIcon.png")} text="Channel" />
                </View>
                <View style={styles.buttons}>
                    <MovieButton icon={require("../../Assets/rewindIcon.png")} text="Rewind"/>
                    <MovieButton icon={require("../../Assets/playIcon.png")} text="Play"/>
                    <MovieButton icon={require("../../Assets/pauseIcon.png")} text="Pause"/>
                    <MovieButton icon={require("../../Assets/forwardIcon.png")} text="Forward"/>
                </View>
                <View style={styles.programs}>
                    <Programs 
                        color={iconBackground} 
                        text="Netflix"
                        icon={require("../../Assets/netflix.png")}
                    />
                    <Programs 
                        color={twitchBackground} 
                        text="Twitch" 
                        icon={require("../../Assets/twitch.png")}
                    />
                    <Programs 
                        color={googleBackground} 
                        text="Google"
                        icon={require("../../Assets/google.png")}
                    />
                </View>

                <View style={styles.programs}>
                    <Programs 
                        color={iconBackground} 
                        text="Espn"
                        icon={require("../../Assets/espn.png")}
                    />
                    <Programs 
                        color={youtubeBackground} 
                        text="Youtube" 
                        icon={require("../../Assets/youtube.png")}
                    />
                    <Programs 
                        isAmazon
                        color={iconBackground} 
                        text="Prime Video"
                        icon={require("../../Assets/amazonprimevideo.png")}
                    />
                </View>
                <View>
                    <MouseMove />
                </View>
            </View>
        </View>
    )
}
