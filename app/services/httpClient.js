import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3001'
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem('ramup-token');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});