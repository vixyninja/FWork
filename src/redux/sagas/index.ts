import { all, fork } from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';
import watchCategorySaga from './category.saga';
import watchChatSaga from './chat.saga';
import watchJobSaga from './job.saga';
export default function* RootSaga() {
  yield all([
    fork(watchAuthSaga),
    fork(watchJobSaga),
    fork(watchCategorySaga),
    fork(watchChatSaga),
  ]);
}
