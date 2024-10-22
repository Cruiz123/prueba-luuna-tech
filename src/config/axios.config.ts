import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const resolver = axios.create({ baseURL: BASE_URL })

resolver.interceptors.request.use((config) => {
    return config
})
