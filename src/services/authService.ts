import axios from "axios";
import axiosInstance from "@/axios/axiosConfig";
import { LoginCredentials, RegisterCredentials } from "@/types/auth";

export default function authService() {
  return {
    login: async (userData: LoginCredentials) => {
      try {
        const response = await axiosInstance.post("/auth/login", {
          userData,
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error.response?.data || error.message;
        } else {
          throw error;
        }
      }
    },

    logout: async () => {
      try {
        const response = await axiosInstance.post("/auth/logout");
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error.response?.data || error.message;
        } else {
          throw error;
        }
      }
    },

    register: async (userData: RegisterCredentials) => {
      try {
        const response = await axiosInstance.post("/auth/register", userData);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error.response?.data || error.message;
        } else {
          throw error;
        }
      }
    },
  };
}
