import React, { useState } from 'react'

import { View, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { COLLECTION_CURRENTIP, COLLECTION_IPLIST } from '../../config/database'

import { styles } from './styles'
import axios from 'axios'

export function SendText(props) {
    const [text, setText] = useState('')

    const navigation = useNavigation()

    async function writeText() {
        const body = {
            type: 'Write',
            command: text
        }
        const ip = await AsyncStorage.getItem(COLLECTION_CURRENTIP)
        const ipParse = JSON.parse(ip)
        const api = axios.create({
            baseURL: `http://${ipParse}:8000/main`
        })
        await api.post('/python', body)
        setText('')
    }

    async function saveIP() {
        const storage = await AsyncStorage.getItem(COLLECTION_IPLIST)
        const ipList = storage ? JSON.parse(storage) : []
        const currentIp = ipList.find(ip => ip === text)
        console.log(ipList)
        console.log(currentIp)
        console.log(currentIp.length)
        if (currentIp.length > 0) {
        } else {
            await AsyncStorage.setItem(
                COLLECTION_IPLIST,
                JSON.stringify([...ipList, text])
            )
        }
    }

    async function testIP() {
        await AsyncStorage.setItem(COLLECTION_CURRENTIP, JSON.stringify(text))

        const api = axios.create({
            baseURL: `http://${text}:8000/main`
        })
        await api
            .get('/')
            .then(() => {
                saveIP()
                navigation.navigate('Home')
            })
            .catch(error => {
                alert(
                    'Failed to connect to the server, check inserted IP address'
                )
                console.log('Erro')
            })
        setText('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity
                onPress={
                    props.screen === 'Home' ? () => writeText() : () => testIP()
                }
            >
                <View style={styles.icon}>
                    <Image source={require('../../Assets/textInputIcon.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
