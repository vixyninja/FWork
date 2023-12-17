import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  CategoryType,
  HistoryJobType,
  JobSaveType,
  JobState,
  JobType,
  PostJobType,
  Redux,
} from '../types';
import { PayloadHttp, PayloadHttpList } from '@/types';

const initialState: JobState = {};

const reducer = createSlice({
  name: Redux.job,
  initialState: initialState,
  reducers: {
    //job
    getListData: (state: JobState) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<JobType>>
    ) => {
      return {
        ...state,
        listData: {
          data: action.payload.data,
        },
      };
    },
    //category/type
    setCategory: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<CategoryType>>
    ) => {
      return {
        ...state,
        category: {
          data: action.payload.data,
        },
      };
    },

    getDetailData: (state: JobState, _: PayloadAction<String>) => {
      return {
        ...state,
      };
    },
    setDetailData: (
      state: JobState,
      action: PayloadAction<PayloadHttp<JobType>>
    ) => {
      return {
        ...state,
        detailData: {
          data: action.payload.data,
        },
      };
    },
    //user-job
    applyJob: (state: JobState, _: PayloadAction<FormData>) => {
      return {
        ...state,
      };
    },
    //user-job/owner
    getHistoryApplyJob: (state: JobState) => {
      return {
        ...state,
      };
    },
    setHistoryApplyJob: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<HistoryJobType>>
    ) => {
      return {
        ...state,
        historyApplyJob: {
          data: action.payload.data,
        },
      };
    },
    //job
    postJob: (state: JobState, _: PayloadAction<FormData>) => {
      return {
        ...state,
      };
    },
    setPostJob: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<PostJobType>>
    ) => {
      return {
        ...state,
        listPostJob: {
          data: action.payload.data,
        },
      };
    },
    //job/get-job-by-name
    searchJob: (state: JobState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setSearchJob: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<JobType>>
    ) => {
      return {
        ...state,
        listSearchJob: {
          data: action.payload.data,
        },
      };
    },
    //job/get-job-by-category
    getJobByCategory: (state: JobState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setJobByCategory: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<JobType>>
    ) => {
      return {
        ...state,
        listJobByCategory: {
          data: action.payload.data,
        },
      };
    },

    //save-job
    getSaveJob: (state: JobState) => {
      return {
        ...state,
      };
    },
    setSaveJob: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<JobSaveType>>
    ) => {
      return {
        ...state,
        listSaveJob: {
          data: action.payload.data,
        },
      };
    },
    saveJob: (state: JobState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    removeSaveJob: (state: JobState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    //user post
    getUserPost: (state: JobState) => {
      return {
        ...state,
      };
    },
    setUserPost: (
      state: JobState,
      action: PayloadAction<PayloadHttpList<PostJobType>>
    ) => {
      return {
        ...state,
        listUserPost: {
          data: action.payload.data,
        },
      };
    },
    createUserPost: (state: JobState, _: PayloadAction<FormData>) => {
      return {
        ...state,
      };
    },
  },
});

export const JobActions = reducer.actions;
export const JobReducer = reducer.reducer;
