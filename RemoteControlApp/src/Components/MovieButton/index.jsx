import React from 'react'

import { View, Image, Text, TouchableOpacity } from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_CURRENTIP } from '../../config/database'

import { styles } from './styles'

export function MovieButton(props) {
    async function runProgram() {
        const body = {
            type: 'Command',
            command: props.text
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
            <TouchableOpacity onPress={() => runProgram()}>
                <View style={styles.content}>
                    <Image style={styles.icon} source={props.icon} />
                </View>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
