import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for auth headers or other common logic
apiService.interceptors.request.use(
  (config) => {
    // Example: Add auth token if available
    // const userAuthToken = localStorage.getItem('userAuthToken');
    // if (userAuthToken) {
    //   config.headers['Authorization'] = `Bearer ${userAuthToken}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for error handling
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    // Optionally log or show notifications
    return Promise.reject(error);
  }
);

export default apiService;
