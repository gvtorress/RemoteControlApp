import { StyleSheet } from 'react-native'

import { theme } from '../../global/@styles/theme'

const { iconBackground } = theme.colors

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 62,
        height: 62,
        borderRadius: 8,
        marginLeft: 60,
        backgroundColor: iconBackground
    }
})
