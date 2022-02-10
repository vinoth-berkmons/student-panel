export interface User {
  userName: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  admin: User | null;
  loading: boolean;
  status: string;
  error: string | null;
}
