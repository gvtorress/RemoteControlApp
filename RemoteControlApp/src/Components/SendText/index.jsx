import React, { useState } from 'react';

import {
  View, TextInput, Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { api } from '../../services/api';

import { styles } from './styles';

export function SendText(){
  const [text, setText] = useState("")

  async function writeText() {
    const body = {
      type: "Write",
      command: text
    }

    const response = await api.post('/python', body)
  }

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={setText}/>
        <TouchableOpacity onPress={() => writeText()}>
          <View style={styles.icon}>
            <Image 
              source={require("../../Assets/textInputIcon.png")}
            />
          </View>
        </TouchableOpacity>
    </View>
  );
}