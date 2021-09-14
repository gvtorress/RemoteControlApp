import React from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_CURRENTIP } from '../../config/database';

import { API } from '../../services/api';

import { styles } from './styles';

export function DoubleButton(props){
  async function runProgram(volume){
    const body = {
      type: "Command",
      command: ""
    }

    if (volume === "down"){
      body.command = `${props.text} Down`
    } else {
      body.command = `${props.text} Up`
    }

    const ip = await AsyncStorage.getItem(COLLECTION_CURRENTIP)
    const ipParse = JSON.parse(ip)

    const api = axios.create({
      baseURL: `http://${ipParse}:8000/main`
    })
    await api.post('/python', body)
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