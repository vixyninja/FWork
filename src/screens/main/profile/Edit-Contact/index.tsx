import React, { FunctionComponent } from 'react';

import { Button } from '@rneui/themed';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import useStyles from './styles';
import { BackIcon, EmailIcon, LocationIcon, PhoneIcon } from '@/assets';
import { Headers, InputCustom } from '@/components/customs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions } from '@/redux/reducers';
import { getAuthUser } from '@/redux/selectors';

const EditContact: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);
  const dispatch = useAppDispatch();
  const [userForm, setUserForm] = React.useState({
    address: user.address || '',
    phone_number: user.phone_number || '',
  });
  const handleUpdateProfile = () => {
    if (userForm.address || userForm.phone_number) {
      dispatch(AuthActions.updateUserProfile(userForm));
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Headers
          title="Contact Information"
          leftIcon={<BackIcon />}
          onPressLeftIcon={() => NavigationService.goBack()}
        />
        <View>
          {/* Form */}
          <View style={styles.form}>
            <InputCustom
              label="Address"
              labelStyle={styles.labelTitle}
              placeholder="Address"
              leftIcon={<LocationIcon />}
              defaultValue={user?.address || ''}
              onChangeText={(text) => {
                setUserForm({ ...userForm, address: text });
              }}
            />
            <InputCustom
              label="Phone Number"
              labelStyle={styles.labelTitle}
              placeholder="Phone Number"
              leftIcon={<PhoneIcon />}
              defaultValue={user?.phone_number || ''}
              onChangeText={(text) => {
                setUserForm({ ...userForm, phone_number: text });
              }}
            />
            <InputCustom
              label="Email"
              labelStyle={styles.labelTitle}
              placeholder="Email"
              leftIcon={<EmailIcon />}
              defaultValue={user?.email || ''}
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditContact;
