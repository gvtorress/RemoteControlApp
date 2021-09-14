import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_CURRENTIP } from '../config/database'

export function API() {
    let storage = ''
    let storageParse = ''

    async function storageFunc() {
        storage = await AsyncStorage.getItem(COLLECTION_CURRENTIP)
        storageParse = JSON.parse(storage)
        // return new Promise((resolve, reject) => {
        //     resolve(storageParse)
        // })
    }

    storageFunc().then(console.log(storageParse))

    console.log(storageParse)

    const api = axios.create({
        baseURL: `http://${storageParse}:8000/main`
    })
    return api
}
