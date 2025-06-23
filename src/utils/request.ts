import axios from 'axios'

const request = axios.create({
  adapter: 'fetch',
  baseURL: 'https://www.fsp.ink/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use((config) => {
  return config
})

export default request
