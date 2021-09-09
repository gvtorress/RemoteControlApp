import { StyleSheet, Dimensions } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { googleBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonView: {
        marginHorizontal: 60,
        width: Dimensions.get('window').width - 120,
        height: 40,
        backgroundColor: googleBackground,
        borderRadius: 8
    },
    button: {
        width: '50%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: googleBackground,
        justifyContent: 'flex-start'
    },
    view: {
        marginTop: 300,
        marginHorizontal: 60,
        width: Dimensions.get('window').width - 120,
        height: 40,
        flexDirection: 'row',
        marginBottom: 30
    }
})
