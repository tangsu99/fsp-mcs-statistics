import axios from 'axios'
import { useMessagesStore } from '@/stores/messages'

const request = axios.create({
  adapter: 'fetch',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error(error)
    const messages = useMessagesStore()
    messages.add({ text: '系统错误', color: 'error' })
  },
)

export default request
