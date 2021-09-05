import React from 'react'

import { Image, Text, View } from 'react-native'

import { styles } from './styles'

export function Programs(props) {

    return (
      <View style={styles.container}>
        <View 
          style={styles.icon}
          backgroundColor={props.color}
        >
          { props.isAmazon ? <View style={styles.amazon}></View> : <View></View>}
          <Image style={styles.image} source={ props.icon } />
        </View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    )
}
