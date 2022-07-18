import { StyleSheet } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40
    },
    content: {
        width: 40,
        height: 30,
        backgroundColor: whiteBackground,
        borderRadius: 8,
        alignSelf: 'center'
    },
    icon: {
        width: '90%',
        height: '90%',
        alignSelf: 'center',
        marginTop: 2
    },
    text: {
        color: whiteBackground,
        fontSize: 10,
        textAlign: 'center'
    }
})
