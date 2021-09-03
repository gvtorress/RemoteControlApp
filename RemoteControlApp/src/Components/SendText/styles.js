import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { googleBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 120,
        height: 50,
        borderRadius: 8,
        backgroundColor: googleBackground,
        alignItems: 'center',
        margin: 60,
        flexDirection: 'row'
    },
    input: {
        width: '85%'
    }
})
