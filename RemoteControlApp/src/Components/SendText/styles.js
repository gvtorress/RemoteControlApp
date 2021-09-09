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
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: '80%'
    },
    icon: {
        marginRight: 10
    }
})
