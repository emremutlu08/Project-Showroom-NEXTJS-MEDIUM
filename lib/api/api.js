/* Components */
import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_URL}/api`;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => err,
);

export default api;
