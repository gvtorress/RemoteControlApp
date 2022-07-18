import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { whiteBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 120,
        height: 50,
        borderRadius: 8,
        backgroundColor: whiteBackground,
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: '100%'
    },
    icon: {
        marginRight: 10
    }
})
