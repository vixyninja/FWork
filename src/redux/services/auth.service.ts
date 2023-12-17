import apiService from './api.service';
import { Endpoints } from './enpoints';
import { LoginPayload } from '@/redux/types';

export class AuthService {
  static async handleLogin(payload: LoginPayload) {
    return await apiService.post(Endpoints.LOGIN_ENDPOINT, payload);
  }
  static async handleCreateAccount(
    payload: Omit<LoginPayload, 'device_token'>
  ) {
    return await apiService.post(Endpoints.CREATE_ACCOUNT_ENDPOINT, payload);
  }
  static async hanleGGLogin(payload: Omit<LoginPayload, 'password'>) {
    return await apiService.post(Endpoints.SIGN_IN_GOOGLE, payload);
  }
}
