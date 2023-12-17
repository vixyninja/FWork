/* eslint-disable import/order */
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, User } from '../types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthActions, LoadingActions } from '../reducers';
import { AuthService, UserService } from '../services';
import SimpleToast from 'react-native-simple-toast';
import { CustomToast, GoogleService } from '@/utils';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';
//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
  yield put(LoadingActions.showLoading());

  try {
    const { data }: any = yield call(AuthService.handleLogin, action.payload);
    if (data.code === 200) {
      yield put(
        AuthActions.handleLoginSuccess({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          enableSignIn: true,
        })
      );
      yield call(getProfileSaga);
      CustomToast('Login success Sir !! 🚀️');
    } else {
      CustomToast(data.message);
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//login google
function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'password' | 'email'>>
): Generator {
  yield put(LoadingActions.showLoading());
  try {
    yield GoogleService.logout();
    GoogleService.configure({
      webClientId:
        '713547640262-40gdl0270si0ut5gejugmorp7qiolr0r.apps.googleusercontent.com',
    });
    const checkLogin = yield GoogleService.checkSignIn();
    if (!checkLogin) {
      const { user }: any = yield GoogleService.login();
      const { data }: any = yield call(AuthService.hanleGGLogin, {
        email: user.email,
        device_token: action.payload.device_token,
      });
      if (data.code === 200) {
        yield put(
          AuthActions.handleLoginSuccess({
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            enableSignIn: true,
          })
        );
        yield call(getProfileSaga);
        CustomToast('Login success Sir !! 🚀️');
      } else {
        CustomToast(data.message);
        yield call(cleanUser);
      }
    } else {
      yield call(getProfileSaga);
    }
  } catch (error: any) {
    SimpleToast.show(error.message, SimpleToast.SHORT);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//create account
function* createAccountSaga(
  action: PayloadAction<Omit<LoginPayload, 'device_token'>>
): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(
      AuthService.handleCreateAccount,
      action.payload
    );
    if (data.code === 200) {
      yield put(
        AuthActions.handleCreateAccountSuccess({
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        })
      );
      CustomToast('Create account success Sir !! 🚀️');
      NavigationService.navigate(routes.SIGN_IN);
    } else {
      yield call(cleanUser);
      CustomToast(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//update user avatar
function* updateUserAvatarSaga(action: PayloadAction<FormData>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(
      UserService.updateUserAvatar,
      action.payload
    );
    if (data.code === 200) {
      yield call(getProfileSaga);
      CustomToast('You has been changed new avatar !! 🚀️');
      NavigationService.goBack();
    } else {
      yield call(cleanUser);
      CustomToast(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//update user profile
function* updateUserProfileSaga(action: PayloadAction<User>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(
      UserService.updateUserProfile,
      action.payload
    );
    if (data.code === 200) {
      yield call(getProfileSaga);
      CustomToast('Update profile success Sir !! 🚀️');
      NavigationService.goBack();
    } else {
      yield call(cleanUser);
      CustomToast(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//get profile
function* getProfileSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const { data }: any = yield call(UserService.getProfile);
    if (data.code === 200) {
      yield put(
        AuthActions.getUserInfoSuccess({
          user: data.data,
          enableSignIn: true,
        })
      );
    } else {
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
//clean user
function* cleanUser(): Generator {
  yield put(
    AuthActions.getUserInfoFailed({
      enableSignIn: false,
      accessToken: '',
      refreshToken: '',
      enableBiometric: false,
      user: {},
      isGoogle: false,
    })
  );
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);
  yield takeLatest(AuthActions.getUserInfo.type, getProfileSaga);
  yield takeLatest(AuthActions.handleCreateAccount.type, createAccountSaga);
  yield takeLatest(AuthActions.handleLoginGoogle.type, loginGoogleSaga);
  yield takeLatest(AuthActions.updateUserAvatar.type, updateUserAvatarSaga);
  yield takeLatest(AuthActions.updateUserProfile.type, updateUserProfileSaga);
}
