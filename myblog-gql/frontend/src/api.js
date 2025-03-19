import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3001", 
  withCredentials: true
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post("http://localhost:3001/refresh_token", {}, { withCredentials: true });
        const newAccessToken = response.data.token;
        localStorage.setItem("token", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);


export default api;
