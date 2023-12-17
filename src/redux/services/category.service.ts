import apiService from './api.service';
import { Endpoints } from './enpoints';

export class CategoryService {
  static async getAllJobCategoryApi(type: string) {
    return await apiService.get(
      `${Endpoints.GET_ALL_CATEGORY_ENDPOINT}/${type}`
    );
  }
}
