import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CategoryState, Redux } from '@/redux/types';

const initialState: CategoryState = {
  jobs: [],
};

const reducer = createSlice({
  name: Redux.category,
  initialState,
  reducers: {
    getAllJobCategory: (state: CategoryState) => {
      return {
        ...state,
      };
    },
    setAllJobCategory: (
      state: CategoryState,
      action: PayloadAction<Partial<CategoryState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const CategoryActions = reducer.actions;
export const CategoryReducer = reducer.reducer;
