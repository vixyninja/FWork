import React from 'react';

import { Button, Image } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import {
  BackIcon,
  FacebookIcon,
  GoogleIcon,
  LinkEdinIcon,
  images,
} from '@/assets';
import { Headers, StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useFcm } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions, LoadingActions } from '@/redux/reducers';
import { GoogleService } from '@/utils';

const Lobby = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const fcm = useFcm();
  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: (await fcm.getDeviceToken()).toString(),
      })
    );
  };
  // React.useEffect(() => {
  //   dispatch(LoadingActions.hideLoading());
  // }, []);
  const handleFacebook = async () => {};

  const handleLinked = () => {
    console.log('handleLinked');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Headers leftIcon={<BackIcon />} />

      {/* Body */}
      <View style={styles.body}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={images.lobby_logo} style={styles.logoImage} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <StyledText style={styles.titleText}>Let's you in</StyledText>
        </View>

        {/* Facebook Login */}
        <TouchableOpacity
          style={styles.socialContainer}
          onPress={handleFacebook}
        >
          <View style={styles.socialIcon}>
            <FacebookIcon />
          </View>
          <StyledText style={styles.socialText}>
            Countinue with Facebook
          </StyledText>
        </TouchableOpacity>

        {/* Google Login */}
        <TouchableOpacity style={styles.socialContainer} onPress={handleGoogle}>
          <View style={styles.socialIcon}>
            <GoogleIcon />
          </View>
          <StyledText style={styles.socialText}>
            Countinue with Google
          </StyledText>
        </TouchableOpacity>

        {/* Linked Login */}
        <TouchableOpacity style={styles.socialContainer} onPress={handleLinked}>
          <View style={styles.socialIcon}>
            <LinkEdinIcon />
          </View>
          <StyledText style={styles.socialText}>
            Countinue with Linked
          </StyledText>
        </TouchableOpacity>

        {/* Or */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <StyledText style={styles.orText}>or</StyledText>
          <View style={styles.line} />
        </View>
      </View>
      {/* Button */}
      <Button
        style={styles.button}
        containerStyle={styles.buttonContainer}
        title={'Sign in with password'}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitle}
        onPress={() => {
          NavigationService.navigate(routes.SIGN_IN);
        }}
      />

      {/* Sign up */}
      <View style={styles.signUpContainer}>
        <StyledText style={styles.signUpText}>
          Don't have an account?
        </StyledText>
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate(routes.CREATE_ACCOUNT);
          }}
        >
          <StyledText style={styles.signUpButton}> Sign up</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lobby;
