import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const __API_BASE_URI_ = import.meta.env.VITE_API_BASE_URI
const __API_URI__ = __API_BASE_URI_+import.meta.env.VITE_APP_BASE_URI_PATH

const httpEndpoint = __API_URI__

 const axiosClient = axios.create({
  baseURL: httpEndpoint,
  headers: {
   //Authorization: token = useAuthStore().token() ? `Bearer ${token}` : ""
  }
})

axiosClient.interceptors.request.use(
  config => {
    const token = useAuthStore().token() //localStorage.getItem('apollo-token')

    if(token){
       config.headers['Authorization'] = `Bearer ${token}` ;
    }

      return config;
  },
  error => {
      return Promise.reject(error);
  }
)

export default axiosClient