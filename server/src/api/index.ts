// client/src/api/index.ts
import axios, { AxiosInstance } from 'axios';

// Set your server IP address here (replace with your computer's IP when testing)
const baseURL = 'http://192.168.1.xxx:5000/api';

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkHealth = async (): Promise<{ status: string; message: string }> => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('API Health Check Error:', error);
    throw error;
  }
};

export default api;