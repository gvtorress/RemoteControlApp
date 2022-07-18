import { StyleSheet } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        marginBottom: 10
    },
    content: {
        width: 30,
        height: 30,
        backgroundColor: whiteBackground,
        borderRadius: 8,
        alignSelf: 'center'
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: whiteBackground,
        fontSize: 10,
        textAlign: 'center'
    },
    full: {
        justifyContent: 'space-between'
    }
})
