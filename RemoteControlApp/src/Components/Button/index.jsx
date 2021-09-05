import React from 'react';

import {
  View, Image, Text
} from 'react-native';

import { styles } from './styles';

export function Button(props){
  return (
      <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.icon} source={ props.icon } />
            </View>
                <Text style={styles.text}>{ props.text}</Text>
      </View>
  );
}