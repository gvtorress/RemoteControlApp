import React, { useEffect, useState } from 'react'

import { Text, View, ScrollView, Button } from 'react-native'

import { useNavigation } from '@react-navigation/core'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import { SendText } from '../../Components/SendText'

import { styles } from './styles'
import { COLLECTION_CURRENTIP, COLLECTION_IPLIST } from '../../config/database'

export function IPSignIn() {
    const ip = []
    let ipFinal = ''
    navigation = useNavigation()

    useEffect(() => {
        axios.defaults.timeout = 1000
    }, [])

    async function successCallback(i) {
        ipFinal = i
        await AsyncStorage.setItem(
            COLLECTION_CURRENTIP,
            JSON.stringify(ipFinal)
        )
        console.log('Sucesso')
        console.log(ipFinal)
        navigation.navigate('Home')
    }

    function failureCallback() {
        console.log('IP Inválido')
    }

    // useEffect(() => {
    //     async function RefreshList() {
    //         const ipList = ['192.168.0.184', '192.168.15.59']
    //         await AsyncStorage.setItem(
    //             COLLECTION_IPLIST,
    //             JSON.stringify(ipList)
    //         )
    //     }

    //     RefreshList()
    // }, [])

    async function handlePress() {
        const response = await AsyncStorage.getItem(COLLECTION_IPLIST)
        const ipList = response ? JSON.parse(response) : []
        console.log(ipList)
        await AsyncStorage.removeItem(COLLECTION_CURRENTIP)
        ipList.map(item => {
            ip.push(item)
        })
        for (const i in ip) {
            const api = axios.create({
                baseURL: `http://${ip[i]}:8000/main`
            })
            const test = await api.get('/').catch(() => failureCallback())
            // .then(() => {
            //     successCallback(ip[i])
            // })
            // .catch(error => {
            //     failureCallback()
            // })
            if (typeof test !== 'undefined') {
                console.log(test.data.message)
                successCallback(ip[i])
                break
            }
        }
    }

    return (
        <ScrollView
            style={styles.container}
            scrollEnabled="false"
            keyboardShouldPersistTaps="never"
        >
            <View style={styles.content}>
                <Text style={styles.text}>
                    Insert your server's internal IP Address
                </Text>
                <SendText screen="IPSignIn" />
            </View>
            <View style={styles.button}>
                <Button
                    title="Test already used IP addressess"
                    onPress={() => handlePress()}
                ></Button>
            </View>
        </ScrollView>
    )
}
