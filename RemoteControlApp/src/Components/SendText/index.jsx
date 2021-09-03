import React from 'react';

import {
  View, TextInput, Image
} from 'react-native';

import { styles } from './styles';

export function SendText(){
  return (
    <View style={styles.container}>
          <TextInput style={styles.input}/>
        <View>
          <Image 
            source={require("../../Assets/textInputIcon.png")}
          />
        </View>
    </View>
  );
}