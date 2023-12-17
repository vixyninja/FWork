import { RootState } from '@/hooks';

export const getListJob = (state: RootState) => state.job.listData;
export const getDetailJob = (state: RootState) => state.job.detailData;
export const getAllCategory = (state: RootState) => state.job.category;
export const getHistoryApplyJob = (state: RootState) =>
  state.job.historyApplyJob;
export const getListPostJob = (state: RootState) => state.job.listPostJob;
export const getListSearchJob = (state: RootState) => state.job.listSearchJob;
export const getListJobByCategory = (state: RootState) =>
  state.job.listJobByCategory;
export const getListSaveJob = (state: RootState) => state.job.listSaveJob;
export const getListUserPost = (state: RootState) => state.job.listUserPost;
