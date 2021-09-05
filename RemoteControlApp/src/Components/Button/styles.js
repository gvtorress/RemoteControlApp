import { StyleSheet } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { googleBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 50
    },
    content: {
        width: 30,
        height: 30,
        backgroundColor: googleBackground,
        borderRadius: 8,
        alignSelf: 'center'
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: googleBackground,
        fontSize: 10,
        textAlign: 'center'
    }
})
