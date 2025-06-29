import { create } from "zustand";
import axiosInstance from "../axios/axiosConfig";
import { User, AuthResponse, AuthState } from "../types/auth";
import axios from "axios";


const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  signIn: async (username: string, password: string): Promise<User> => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post<AuthResponse>("/auth/signin", {
        username,
        password,
      });

      const user = response.data.user;
      set({ user, isLoading: false });
      return user;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({
          error: error.response?.data?.message || "Đăng nhập thất bại",
          isLoading: false,
        });
      } else {
        set({ error: "Lỗi không xác định", isLoading: false });
      }
      throw error;
    }
  },

  signOut: async (): Promise<void> => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post("/auth/signout");
      set({ user: null, isLoading: false });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({
          error: error.response?.data?.message || "Đăng xuất thất bại",
          isLoading: false,
        });
      } else {
        set({ error: "Lỗi không xác định", isLoading: false });
      }
      throw error;
    }
  },

  fetchUserInfo: async (): Promise<void> => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get<AuthResponse>("/auth/me");
      set({ user: response.data.user || null, isLoading: false });
    } catch {
      set({ user: null, isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useAuthStore;
