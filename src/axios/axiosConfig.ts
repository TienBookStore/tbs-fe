import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1234/api/bao-tien",
  withCredentials: true,
});

export default axiosInstance;
