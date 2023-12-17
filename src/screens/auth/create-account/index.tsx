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
import { InputCustom, Headers } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AlertActions, AuthActions } from '@/redux/reducers';
import { isValidEmail, isValidPassword } from '@/utils';

const CreateAccount: React.FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: 'huynhhongvy78@gmail.com',
    password: 'huynhhongvy78',
  });
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleCreateAccount = async () => {
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

    dispatch(AuthActions.handleCreateAccount(credentials));
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          {/* Header */}
          <Headers
            leftIcon={<BackIcon />}
            onPressLeftIcon={() => {
              if (NavigationService.canGoBack()) {
                NavigationService.goBack();
                return;
              }
              NavigationService.navigate(routes.LOBBY);
            }}
          />

          {/* Body */}
          <View style={styles.body}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image source={images.signup_logo} style={styles.logoImage} />
            </View>

            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Create New Account</Text>
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
              wrapperStyle={styles.checkBox}
              uncheckedColor={styles.checkColor.color}
              containerStyle={styles.checkContainer}
            />
          </View>

          {/* Button */}
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            title={'Sign up'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={handleCreateAccount}
          />

          {/* Line */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or coutinue with</Text>
            <View style={styles.line} />
          </View>

          {/* Social Button */}
          <View style={styles.socialContainer}>
            {/* Facebook */}
            <TouchableOpacity style={styles.socialItemStyle}>
              <FacebookIcon />
            </TouchableOpacity>
            {/* Google */}
            <TouchableOpacity style={styles.socialItemStyle}>
              <GoogleIcon />
            </TouchableOpacity>
            {/* Linked */}
            <TouchableOpacity style={styles.socialItemStyle}>
              <LinkEdinIcon />
            </TouchableOpacity>
          </View>

          {/* Sign up */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.SIGN_IN);
              }}
            >
              <Text style={styles.signUpButton}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default CreateAccount;
