import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('ACCESS_TOKEN');

  axios.defaults.withXSRFToken = true;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      sessionStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
  }
);

export default axiosClient;
