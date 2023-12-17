import apiService from './api.service';
import { configFormData, configNoCache } from './config.service';
import { Endpoints } from './enpoints';

export class JobService {
  //Get
  static async getJob() {
    return await apiService.get(`${Endpoints.GET_JOB_ENDPOINT}`, configNoCache);
  }
  static async getCategory() {
    return await apiService.get(`${Endpoints.GET_CATEGORY_ENDPOINT}`);
  }
  static async getHistoryApplyJob() {
    return await apiService.get(`${Endpoints.HISTORY_APPLY_JOB_ENDPOINT}`);
  }
  static async getPostJob() {
    return await apiService.get(`${Endpoints.GET_JOB_ENDPOINT}`);
  }
  static async getJobByCategory(action: string) {
    return await apiService.get(
      `${Endpoints.GET_JOB_BY_CATEGORY_ENDPOINT}?name=${action}`,
      configNoCache
    );
  }
  static async getSaveJob() {
    return await apiService.get(`${Endpoints.GET_SAVE_JOB_ENDPOINT}`);
  }
  static async getUserPost() {
    return await apiService.get(`${Endpoints.POST_JOB_USER_ENDPOINT}`);
  }

  //Post
  static async postApplyJob(action: FormData) {
    return await apiService.post(
      `${Endpoints.APPLY_JOB_ENDPOINT}`,
      action,
      configFormData
    );
  }

  static async postJob(action: FormData) {
    return await apiService.post(
      `${Endpoints.GET_JOB_ENDPOINT}`,
      action,
      configFormData
    );
  }

  static async postSaveJob(action: string) {
    return await apiService.post(`${Endpoints.GET_SAVE_JOB_ENDPOINT}`, {
      job: action,
    });
  }

  static async postUserPost(action: FormData) {
    return await apiService.post(
      `${Endpoints.POST_JOB_USER_ENDPOINT}`,
      action,
      configFormData
    );
  }

  //delete
  static async deleteSaveJob(action: string) {
    return await apiService.delete(`${Endpoints.GET_SAVE_JOB_ENDPOINT}`, {
      data: {
        job: action,
      },
    });
  }

  //query
  static async searchJobByName(action: string) {
    return await apiService.get(
      `${Endpoints.SEARCH_JOB_ENDPOINT}?job_name=${action}`,
      configNoCache
    );
  }
}
