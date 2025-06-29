
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/ecom-go",
  withCredentials: true,
});

export default axiosInstance;
