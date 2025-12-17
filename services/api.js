// src/services/api.jsx
import axios from 'axios';

// Criando instância do Axios
export const api = axios.create({
  baseURL: '/api', // Proxy redirecionará para http://localhost:8080
  timeout: 5000,   // Timeout de 5s
});

// Interceptor opcional para log ou tratamento global de erro
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);


/* import axios from 'axios'
const API_BASE = 'http://localhost:8080'

export const api = axios.create({ baseURL: API_BASE })
export const predictFlight = p => api.post('/flights/predict', p).then(r=>r.data)
export const listRecentFlights = () => api.get('/flights/recent').then(r=>r.data) */