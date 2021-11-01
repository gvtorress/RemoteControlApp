import React, { useRef } from 'react'

import { View, Button, PanResponder } from 'react-native'

import { MouseMove } from '../../Components/MouseMove'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { COLLECTION_CURRENTIP } from '../../config/database'

import { useNavigation } from '@react-navigation/core'

import { styles } from './styles'

export function Mouse() {
    let x0 = 0
    let y0 = 0
    let dx = 0
    let dy = 0

    async function api(body, type) {
        const ip = await AsyncStorage.getItem(COLLECTION_CURRENTIP)
        const ipParse = JSON.parse(ip)
        const response = axios.create({
            baseURL: `http://${ipParse}:8000/main`
        })
        if (type === 1) {
            await response.post('/python2', body)
        } else {
            await response.post('/python', body)
        }
    }
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                x0 = gestureState.x0
                y0 = gestureState.y0
            },
            onPanResponderMove: (evt, gestureState) => {
                const activeTouches = evt.nativeEvent.changedTouches.length
                if (activeTouches == 1) {
                    dx = gestureState.moveX - x0
                    dy = gestureState.moveY - y0
                    const body = {
                        type: 'Move Mouse',
                        command1: dx * 5,
                        command2: dy * 5
                    }

                    x0 = gestureState.moveX
                    y0 = gestureState.moveY
                    api(body, 1)
                } else {
                    dy = gestureState.moveY - y0
                    const body = {
                        type: 'Scroll',
                        command: dy * 20
                    }
                    y0 = gestureState.moveY
                    api(body, 2)
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {},
            onPanResponderTerminate: (evt, gestureState) => {},
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true
            }
        })
    ).current

    const navigation = useNavigation()

    async function handlePressLeft() {
        const body = {
            type: 'Click',
            command: 'left'
        }
        api(body, 2)
    }

    async function handlePressRight() {
        const body = {
            type: 'Click',
            command: 'right'
        }
        api(body, 2)
    }

    function handlePressBack() {
        navigation.goBack()
    }

    return (
        <View>
            <View style={styles.mouse}>
                <MouseMove />
            </View>
            <View style={styles.mousePad} {...panResponder.panHandlers} />
            <View style={styles.view}>
                <View style={styles.button}>
                    <Button
                        title="Left"
                        onPress={() => handlePressLeft()}
                    ></Button>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Right"
                        onPress={() => handlePressRight()}
                    ></Button>
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button title="Back" onPress={() => handlePressBack()}></Button>
            </View>
        </View>
    )
}
