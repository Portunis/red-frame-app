import axios from 'axios'

/**
 * Создаем экземпляр axios
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SOME_BASE_URL_API
})

export default axiosInstance
