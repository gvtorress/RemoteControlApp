import React from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';

export function DoubleButton(props){
  async function runProgram(volume){
    const body = {
      type: "Command",
      command: ""
    }

    if (volume === "down"){
      body.command = `${props.text}Down`
    } else {
      body.command = `${props.text}Up`
    }

    const response = await api.post('/python', body)
  }
  return (
      <View style={styles.container}>
            <View style={styles.content}>
              <TouchableOpacity onPress={() => runProgram("up")}>
                <Image style={styles.icon} source={props.aboveicon} />
              </TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
              <TouchableOpacity onPress={() => runProgram("down")}>
                <Image style={styles.icon} source={props.belowicon} />
              </TouchableOpacity>
            </View>
      </View>
  );
}