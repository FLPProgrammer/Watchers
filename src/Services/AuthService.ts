import { api } from './Api';
import { RegisterData, LoginData, LoginResponse, AuthResponse } from '../Interfaces/Interfaces';

export async function registerUser(data: RegisterData) {
  const response = await api.post<AuthResponse>(
    '/auth/register',
    data
  );

  return response.data;
}

export async function loginUser(data: LoginData) {
  const response = await api.post<LoginResponse>(
    '/auth/login',
    data
  );

  return response.data;
}


