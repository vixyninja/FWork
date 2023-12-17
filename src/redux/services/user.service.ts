import apiService from './api.service';
import { configFormData } from './config.service';
import { Endpoints } from './enpoints';
import { User } from '../types';

export class UserService {
  static async getUserById(action: string) {
    return await apiService.get(`${Endpoints.GET_USER_ENDPOINT}/${action}`);
  }
  static async getProfile() {
    return await apiService.get(`${Endpoints.GET_PROFILE_ENDPOINT}`);
  }
  static async updateUserAvatar(action: FormData) {
    return await apiService.put(
      `${Endpoints.UPLOAD_USER_AVATAR_ENDPOINT}`,
      action,
      configFormData
    );
  }
  static async updateUserProfile(action: User) {
    return await apiService.put(`${Endpoints.UPDATE_USER_PROFILE_ENDPOINT}`, {
      ...action,
    });
  }
}
