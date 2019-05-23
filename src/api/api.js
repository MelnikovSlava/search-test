import axios from 'axios';
import { BASE_URL } from '../constants/consts';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance };
