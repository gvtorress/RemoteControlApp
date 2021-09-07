import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.184:8000/main'
})

export { api }
