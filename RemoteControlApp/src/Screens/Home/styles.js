import { StyleSheet, Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: getStatusBarHeight(),
        marginHorizontal: 60
    },
    programs: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
})
