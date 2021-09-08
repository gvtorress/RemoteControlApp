import React, { useState} from 'react';

import {
  View, Image, Text, TouchableOpacity
} from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';

export function Button(props){
  let tab = ""

  function newTab(pressType){
    if (tab === "select" || tab === "") {
      tab = "init"
    } else if (tab === "init") {
      tab = "search" 
    } else if (tab === "search" && pressType === "long") {
      tab = "select"
    }
    runProgram(pressType)
  }

  async function runProgram(pressType){
    const body = {
      type: "",
      command: ""
    }

    if (props.text === "Change Program"){
      body.type = "ChangeProgram"
      body.command = tab
    } else {
      body.type = "Command"
      body.command = props.text
    }

    const response = await api.post('/python', body)


  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => newTab("short")} onLongPress={() =>newTab("long")}>
            <View style={styles.content}>
                <Image style={styles.icon} source={ props.icon } />
            </View>
                <Text style={styles.text}>{ props.text}</Text>
        </TouchableOpacity>
      </View>
  );
}