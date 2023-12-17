import React from 'react';

import { Button, CheckBox, Image, Text } from '@rneui/themed';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import useStyles from './styles';
import {
  BackIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  LinkEdinIcon,
  images,
} from '@/assets';
import { Headers, InputCustom } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useFcm } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AlertActions, AuthActions, LoadingActions } from '@/redux/reducers';
import { isValidEmail, isValidPassword } from '@/utils';

const SignIn: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const fcm = useFcm();
  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: 'huynhhongvy78@gmail.com',
    password: 'huynhhongvy78',
  });

  const [checked, setChecked] = React.useState<boolean>(false);
  const handleSignIn = async () => {
    const deviceToken = await fcm.getDeviceToken();

    if (!deviceToken) {
      dispatch(
        AlertActions.setDataAlert({
          description: 'Unable to get device token',
          title: 'Error',
          isShow: true,
        })
      );
      return;
    }

    if (
      isValidEmail(credentials.email) === false ||
      isValidPassword(credentials.password) === false
    ) {
      dispatch(
        AlertActions.setDataAlert({
          description:
            'Please check that your email address is correct and that your password is at least 6 characters long.',
          title: 'Error',
          isShow: true,
        })
      );
      return;
    }

    dispatch(
      AuthActions.handleLogin({
        email: credentials.email,
        password: credentials.password,
        device_token: deviceToken,
      })
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Headers
            leftIcon={<BackIcon />}
            onPressLeftIcon={() => {
              if (NavigationService.canGoBack()) {
                NavigationService.goBack();
                return;
              }
              NavigationService.navigate(routes.LOBBY);
            }}
            style={styles.header}
          />

          {/* Body */}
          <View style={styles.body}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image source={images.signin_logo} style={styles.logoImage} />
            </View>

            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Login to Your Account</Text>
            </View>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <InputCustom
              value={credentials.email}
              onChangeText={(e) =>
                setCredentials({
                  ...credentials,
                  email: e,
                })
              }
              placeholder="Email"
              leftIcon={<EmailIcon />}
            />
            <View style={styles.forgotText} />
            <InputCustom
              value={credentials.password}
              onChangeText={(e) =>
                setCredentials({
                  ...credentials,
                  password: e,
                })
              }
              placeholder="Password"
              secure={true}
            />
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
              title="Remember me"
              textStyle={styles.textBox}
              containerStyle={styles.checkContainer}
              wrapperStyle={styles.checkBox}
              uncheckedColor={styles.checkColor.color}
            />
          </View>

          {/* Button */}
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            title={'Sign in'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={handleSignIn}
            activeOpacity={0.5}
          />

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotTitle}>Forgot the password?</Text>
          </TouchableOpacity>

          {/* Line */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or coutinue with</Text>
            <View style={styles.line} />
          </View>

          {/* Social Button */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialItemStyle}>
              <FacebookIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialItemStyle}>
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialItemStyle}>
              <LinkEdinIcon />
            </TouchableOpacity>
          </View>

          {/* Sign in */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.CREATE_ACCOUNT);
              }}
            >
              <Text style={styles.signUpButton}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SignIn;
