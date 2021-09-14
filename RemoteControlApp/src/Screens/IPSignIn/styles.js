import { Dimensions, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { theme } from '../../global/@styles/theme'

const { googleBackground, iconBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        marginHorizontal: 60
    },
    content: {
        width: Dimensions.get('window').width - 120,
        marginTop: Dimensions.get('window').height / 2 - 100
    },
    text: {
        fontSize: 14,
        color: googleBackground
    },
    button: {
        width: Dimensions.get('window').width - 120,
        backgroundColor: iconBackground,
        borderRadius: 8
    }
})
