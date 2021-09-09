import React from 'react';

import {
  View, Button
} from 'react-native';

import { MouseMove } from '../../Components/MouseMove';

import { api } from '../../services/api';

import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';

export function Mouse(){

  const navigation = useNavigation();

  async function handlePressLeft() {
    const body = {
      type: 'Click',
      command: 'left'
    }

    const response = api.post('/python', body)
  }

  async function handlePressRight() {
    const body = {
      type: 'Click',
      command: 'right'
    }

    const response = api.post('/python', body)
  }

  function handlePressBack() {
    navigation.goBack();
  }

  return (
    <View>
        <MouseMove/>
        <View style={styles.view}>
          <View style={styles.button}>
            <Button title="Left" onPress={() => handlePressLeft()}>
            </Button>
          </View>
          <View style={styles.button}>
            <Button title="Right" onPress={() => handlePressRight()}>
            </Button>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button title="Back" onPress={() => handlePressBack()}>
          </Button>
        </View>
    </View>
  );
}