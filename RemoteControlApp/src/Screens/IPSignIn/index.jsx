import React, { useState } from 'react';

import {
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { API } from '../../services/api';

import { SendText } from '../../Components/SendText';
import { theme } from '../../global/@styles/theme';

import { styles } from './styles';
import { COLLECTION_CURRENTIP, COLLECTION_IPLIST } from '../../config/database';

export function IPSignIn(){
    const { googleBackground, iconBackground } = theme.colors
    const [ipL, setIpL] = useState([])
    const ip = []
    let ipFinal = ""
    navigation = useNavigation()

    async function successCallback(i) {
        ipFinal = i
        await AsyncStorage.setItem(COLLECTION_CURRENTIP, JSON.stringify(ipFinal))
        console.log("Sucesso")
        console.log(ipFinal)
        navigation.navigate("Home")
    }

    function failureCallback() {
        console.log("IP Errado")
    }

    async function handlePress() {
        const response = await AsyncStorage.getItem(COLLECTION_IPLIST)
        const ipList = response ? JSON.parse(response): []
        setIpL(ipList)
        console.log(ipList)
        await AsyncStorage.removeItem(COLLECTION_CURRENTIP)
        ipL.map(item => {
            ip.push(item)
        })
        
        for (const i in ip) {
            const api = axios.create({
                baseURL: `http://${ip[i]}:8000/main`
            })
            console.log(ip[i])
            await api.get('/').then(() => {
                successCallback(ip[i])})
                .catch((error) => {
                console.log("Erro")
            })
        }
        

    }

    return (
        <ScrollView style={styles.container} scrollEnabled="false" keyboardShouldPersistTaps="never">
            <View style={styles.content}>
                <Text style={styles.text}>
                    Insert your server's internal IP Address
                </Text>
                <SendText screen="IPSignIn"/>
            </View>
            <View style={styles.button}>
                <Button title="Test already used IP addressess" onPress={() => handlePress()}></Button>
            </View>
        </ScrollView>
  );
}