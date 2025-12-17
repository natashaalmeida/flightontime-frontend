import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const predictFlight = async (flightData) => {
  const response = await api.post("/api/prediction", flightData);
  return response.data;
};

export default api;


/* import axios from 'axios'
const API_BASE = 'http://localhost:8080'

export const api = axios.create({ baseURL: API_BASE })
export const predictFlight = p => api.post('/flights/predict', p).then(r=>r.data)
export const listRecentFlights = () => api.get('/flights/recent').then(r=>r.data) */