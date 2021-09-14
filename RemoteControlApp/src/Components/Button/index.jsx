import React, { useState} from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { api } from '../../services/api';

import { styles } from './styles';

export function Button(props){
  const navigation = useNavigation();
  let tab = ""

  function newTab(pressType){
    if (props.text === "Change Screen"){
      tab = ""
    } else {
      if (tab === "select" || tab === "") {
        tab = "init"
      } else if (tab === "init" && pressType === "long") {
        tab = "select"
      } else if (tab === "init") {
        tab = "search"
      } else if (tab === "search" && pressType === "long") {
        tab = "select"
      }
    }
  }

  async function runProgram(pressType){
    const body = {
      type: "",
      command: ""
    }

    if (props.text === "Change Program" || props.text === "Change Screen"){
      body.type = props.text
      newTab(pressType)
      body.command = tab
    } else if (props.text === "Mouse") {
      navigation.navigate('Mouse')
    } else {
      body.type = "Command"
      body.command = props.text
    }

    const response = await api.post('/python', body)
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => runProgram("short")} onLongPress={() =>runProgram("long")}>
          <View style={styles.full}>
            <View style={styles.content}>
              <Image style={styles.icon} source={ props.icon } />
            </View>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}