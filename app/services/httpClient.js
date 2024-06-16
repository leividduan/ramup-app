import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://192.168.0.128:3001'
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem('ramup-token');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});