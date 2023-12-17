import React, { FunctionComponent } from 'react';

import { Button, Image } from '@rneui/themed';
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Asset } from 'react-native-image-picker';

import IsGoogleLogin from './IsGoogleLogin';
import useStyles from './styles';
import { BackIcon } from '@/assets';
import { Headers, InputCustom } from '@/components/customs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions } from '@/redux/reducers';
import { getAuthUser } from '@/redux/selectors';

const EditProfile: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);
  const dispatch = useAppDispatch();

  const [captureImage, setCaptureImage] = React.useState<Asset[]>([{}]);

  const captureImageFunc = (asset: Asset | undefined) => {
    if (asset === undefined) {
      return;
    }
    if (asset.uri) {
      setCaptureImage([asset]);
    } else {
      console.log('no image');
    }
  };
  const formdata = new FormData();
  React.useEffect(() => {
    formdata.append('image', {
      uri: captureImage[0].uri,
      name: captureImage[0].fileName,
      type: captureImage[0].type,
    });
  }, [captureImage]);
  const [userForm, setUserForm] = React.useState({
    nick_name: user.nick_name || '',
    full_name: user.full_name || '',
  });
  const handleUpdateProfile = () => {
    if (captureImage[0]?.uri) {
      dispatch(AuthActions.updateUserAvatar(formdata));
    }
    dispatch(AuthActions.updateUserProfile(userForm));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Headers
          title="Profile"
          leftIcon={<BackIcon />}
          onPressLeftIcon={() => NavigationService.goBack()}
        />
        <View>
          <View style={styles.avatarContainer}>
            {captureImage[0]?.uri ? (
              <Image
                source={{
                  uri: captureImage[0]?.uri,
                }}
                style={styles.avatarStyle}
              />
            ) : (
              <Image
                source={{
                  uri:
                    user?.avatar?.url ||
                    'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
                }}
                style={styles.avatarStyle}
              />
            )}

            <IsGoogleLogin captureImage={captureImageFunc} />
          </View>
          <View style={styles.line} />

          {/* Form */}
          <View style={styles.form}>
            <InputCustom
              label="Nick Name"
              labelStyle={styles.labelTitle}
              placeholder="First Name"
              defaultValue={user?.nick_name || ''}
              onChangeText={(text) => {
                setUserForm({ ...userForm, nick_name: text });
              }}
            />
            <InputCustom
              label="Full Name"
              labelStyle={styles.labelTitle}
              placeholder="Middle Name"
              defaultValue={user?.full_name || ''}
              onChangeText={(text) => {
                setUserForm({ ...userForm, full_name: text });
              }}
            />
            <InputCustom
              label="Email"
              labelStyle={styles.labelTitle}
              placeholder="Email"
              defaultValue={user?.email || ''}
              editable={false}
            />
            <InputCustom
              label="Current Position"
              labelStyle={styles.labelTitle}
              placeholder="Current Position"
              defaultValue="Primary Account"
              editable={false}
            />
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            title={'Save'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            activeOpacity={0.5}
            onPress={handleUpdateProfile}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;
