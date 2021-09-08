import React from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';

export function MovieButton(props){
  async function runProgram(){
    const body = {
      type: "Command",
      command: props.text
    }

    const response = await api.post('/python', body)

  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => runProgram()}>
            <View style={styles.content}>
                <Image style={styles.icon} source={ props.icon } />
            </View>
                <Text style={styles.text}>{ props.text}</Text>
        </TouchableOpacity>
      </View>
  );
}