import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
})

client.interceptors.response.use((res: any) => {
  return res
},
async (err: any) => {
  return Promise.reject(err)
})

export default client