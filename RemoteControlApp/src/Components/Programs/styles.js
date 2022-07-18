import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    icon: {
        width: (Dimensions.get('window').width - 220) / 3,
        height: (Dimensions.get('window').width - 220) / 3,
        borderRadius: 8,
        marginBottom: 5,
        alignSelf: 'center'
    },
    text: {
        color: whiteBackground,
        width: (Dimensions.get('window').width - 220) / 3 + 2,
        textAlign: 'center'
    },
    image: {
        width: '90%',
        height: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        position: 'absolute'
    },
    amazon: {
        width: '60%',
        height: '55%',
        backgroundColor: whiteBackground,
        alignSelf: 'center',
        marginTop: 12
    }
})
