import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useThemeMode } from '@rneui/themed';
import { StatusBar } from 'react-native';

import { navigationRef } from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { authentication } from '@/core';
import { useAppDispatch, useAppSelector, useFcm } from '@/hooks';
import {
  getAuthEnableBiometric,
  getAuthEnableSignIn,
  getTheme,
} from '@/redux/selectors';

const RootNavigation = () => {
  const dispatch = useAppDispatch();

  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const enableBiometric = useAppSelector(getAuthEnableBiometric);

  useEffect(() => {
    // const checkEnableSignInBiometric = async () => {
    //     if (enableBiometric) {
    //         const result =
    //             await authentication.authenticateWithBiometrics();
    //         if (result && result.username && result.password) {
    //             dispatch(
    //                 AuthActions.handleLogin({
    //                     username: result.username,
    //                     password: result.password,
    //                 })
    //             );
    //         }
    //     }
    // };
    // checkEnableSignInBiometric();
  }, []);

  //theme
  const mode = useAppSelector(getTheme);
  const { setMode } = useThemeMode();
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>
      {mode === 'dark' ? (
        <StatusBar
          animated={true}
          showHideTransition={'slide'}
          backgroundColor={'#000'}
          barStyle={'light-content'}
        />
      ) : (
        <StatusBar
          animated={true}
          showHideTransition={'slide'}
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
        />
      )}

      {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
