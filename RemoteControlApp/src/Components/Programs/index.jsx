import React from 'react'

import { Image, Text, View, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_CURRENTIP } from '../../config/database'
import axios from 'axios'

import { API } from '../../services/api'

import { styles } from './styles'

export function Programs(props) {
    async function handlePress() {
        const body = {
            command: ''
        }

        switch (props.text) {
            case 'Netflix':
                body.command = 'start chrome www.netflix.com'
                break
            case 'Twitch':
                body.command = 'start chrome www.twitch.tv'
                break
            case 'Google':
                body.command = 'start chrome www.google.com'
                break
            case 'Espn':
                body.command =
                    'start chrome https://www.espn.com.br/watch/collections/392/ao-vivo?country=br'
                break
            case 'Youtube':
                body.command = 'start chrome www.youtube.com'
                break
            case 'Prime Video':
                body.command = 'start chrome https://www.primevideo.com/'
        }
        const ip = await AsyncStorage.getItem(COLLECTION_CURRENTIP)
        const ipParse = JSON.parse(ip)

        const api = axios.create({
            baseURL: `http://${ipParse}:8000/main`
        })
        await api.post('/command', body)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress()}>
                <View style={styles.icon} backgroundColor={props.color}>
                    {props.isAmazon ? (
                        <View style={styles.amazon}></View>
                    ) : (
                        <View></View>
                    )}
                    <Image style={styles.image} source={props.icon} />
                </View>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
