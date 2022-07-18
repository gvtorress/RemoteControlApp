import { StyleSheet } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground, blackBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 100,
        borderRadius: 20,
        backgroundColor: whiteBackground
    },
    content: {
        width: 40,
        height: 30,
        borderRadius: 8,
        alignSelf: 'center'
    },
    icon: {
        marginTop: 7,
        width: '90%',
        height: '100%',
        alignSelf: 'center'
    },
    text: {
        color: blackBackground,
        fontSize: 10,
        textAlign: 'center',
        marginTop: 7
    }
})
