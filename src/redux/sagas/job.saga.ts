import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { JobActions, LoadingActions } from '../reducers';
import { JobService } from '../services';
import { CategoryType } from '../types';
import { NavigationService } from '@/navigation/NavigationService';
import { CustomToast } from '@/utils';

const All: CategoryType[] = [
  {
    createdAt: new Date(0),
    deletedAt: new Date(0),
    name: 'All',
    type: '',
    updatedAt: new Date(0),
    uuid: '',
  },
];

//get list job and category
function* getlistDataSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data: listJob }: any = yield call(JobService.getJob);
    const { data: category }: any = yield call(JobService.getCategory);
    const { data: listPostJob }: any = yield call(JobService.getPostJob);
    if (listJob.code === 200 && category.code === 200) {
      yield put(
        JobActions.setListData({
          data: listJob.data,
        })
      );
      yield put(
        JobActions.setCategory({
          data: [...All, ...category.data],
        })
      );
      yield put(
        JobActions.setJobByCategory({
          data: listPostJob.data,
        })
      );
    } else {
      CustomToast('Server error');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// apply job
function* postApplyJobSaga(action: PayloadAction<FormData>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.postApplyJob, action.payload);
    if (data.code === 200) {
      yield call(getHistoryApplyJobSaga);
      CustomToast('Apply job success !! 🚀️');
      NavigationService.goBack();
    } else {
      CustomToast(data.message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// get history apply job
function* getHistoryApplyJobSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data: listHistory }: any = yield call(
      JobService.getHistoryApplyJob
    );
    if (listHistory.code === 200) {
      yield put(
        JobActions.setHistoryApplyJob({
          data: listHistory.data,
        })
      );
    } else {
      CustomToast('Server error');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// post job
function* postJobSaga(action: PayloadAction<FormData>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.postJob, action.payload);
    if (data.code == 200) {
      CustomToast('Post job success !! 🚀️');
      NavigationService.goBack();
    } else {
      CustomToast('Server error');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// get post job
function* getPostJobSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.getPostJob);
    if (data.code == 200) {
      yield put(
        JobActions.setPostJob({
          data: data.data,
        })
      );
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// search job
function* searchJob(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(
      JobService.searchJobByName,
      action.payload
    );
    if (data.code == 200) {
      yield put(
        JobActions.setSearchJob({
          data: data.data,
        })
      );
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// get job by category
function* getJobByCategory(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(
      JobService.getJobByCategory,
      action.payload
    );
    if (data.code === 200) {
      yield put(JobActions.setJobByCategory({ data: data.data }));
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// get save job
function* getSaveJobSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.getSaveJob);
    if (data.code === 200) {
      yield put(JobActions.setSaveJob({ data: data.data }));
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// post save job
function* postSaveJobSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.postSaveJob, action.payload);
    if (data.code === 200) {
      yield call(getSaveJobSaga);
      CustomToast('Save job success !! 🚀️');
    } else if (data.code === 400) {
      CustomToast('Job already saved');
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//remove save job
function* removeSaveJobSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.deleteSaveJob, action.payload);
    if (data.code === 200) {
      yield call(getSaveJobSaga);
      CustomToast('Remove job success !! 🚀️');
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//user post
function* getUserPostSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.getUserPost);
    if (data.code === 200) {
      yield put(JobActions.setUserPost({ data: data.data }));
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* createUserJobSaga(action: PayloadAction<FormData>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(JobService.postUserPost, action.payload);
    if (data.code === 200) {
      yield put(JobActions.setUserPost({ data: data.data }));
      yield call(getUserPostSaga);
      CustomToast('Create post user success !! 🚀️');
      NavigationService.goBack();
    } else {
      CustomToast('Server error');
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// watch saga
export default function* watchJobSaga() {
  yield takeLatest(JobActions.applyJob.type, postApplyJobSaga);
  yield takeLatest(JobActions.getListData.type, getlistDataSaga);
  yield takeLatest(JobActions.getHistoryApplyJob.type, getHistoryApplyJobSaga);
  yield takeLatest(JobActions.postJob.type, postJobSaga);
  yield takeLatest(JobActions.searchJob.type, searchJob);
  yield takeLatest(JobActions.getJobByCategory.type, getJobByCategory);
  yield takeLatest(JobActions.getSaveJob.type, getSaveJobSaga);
  yield takeLatest(JobActions.saveJob.type, postSaveJobSaga);
  yield takeLatest(JobActions.removeSaveJob.type, removeSaveJobSaga);
  yield takeLatest(JobActions.getUserPost.type, getUserPostSaga);
  yield takeLatest(JobActions.createUserPost.type, createUserJobSaga);
}
