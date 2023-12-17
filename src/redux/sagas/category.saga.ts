/* eslint-disable import/order */
import { call, put, takeLatest } from 'redux-saga/effects';
import { CategoryActions, LoadingActions } from '@/redux/reducers';
import { CategoryService } from '@/redux/services';

function* getAllJobCategorySaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const res: any = yield call(CategoryService.getAllJobCategoryApi, 'job');
  } catch (error: any) {
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

export default function* watchCategorySaga() {
  yield takeLatest(
    CategoryActions.getAllJobCategory.type,
    getAllJobCategorySaga
  );
}
