import { StyleSheet } from 'react-native'
import { theme } from '../../global/@styles/theme'

const { background } = theme.colors

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background
    }
})
