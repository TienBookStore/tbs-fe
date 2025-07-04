export interface User {
  id: string;
  username: string;
  email?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  signIn: (username: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  fetchUserInfo: () => Promise<void>;
  clearError: () => void;
}

export interface AuthResponse {
  user: User;
  message?: string;
  token?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  pasword: string;
  full_name: string;
}
