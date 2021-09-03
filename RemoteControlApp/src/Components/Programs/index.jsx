import React from 'react'

import { View } from 'react-native'

import { styles } from './styles'

export function Programs(props) {
    return (
      <View 
        style={styles.icon}
        backgroundColor={props.color}
      ></View>
    )
}
