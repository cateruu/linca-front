import axios from 'axios';

export const axiosInstante = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
