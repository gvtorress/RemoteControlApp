import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonView: {
        marginHorizontal: 60,
        width: Dimensions.get('window').width - 120,
        height: 40,
        backgroundColor: whiteBackground,
        borderRadius: 8
    },
    button: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: whiteBackground,
        justifyContent: 'flex-start'
    },
    view: {
        marginHorizontal: 60,
        width: Dimensions.get('window').width - 120,
        height: 40,
        flexDirection: 'row',
        marginBottom: 30
    },
    mouse: {
        width: Dimensions.get('window').width - 120,
        height: 300,
        marginBottom: 50
    },
    mousePad: {
        width: Dimensions.get('window').width - 120,
        height: 140,
        backgroundColor: whiteBackground,
        marginHorizontal: 60,
        marginBottom: 5,
        marginTop: 100,
        borderRadius: 8
    }
})
