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

const EditSummary: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);
  const dispatch = useAppDispatch();
  const [userForm, setUserForm] = React.useState({
    summary: '',
  });
  const handleUpdateProfile = () => {
    if (userForm.summary) {
      dispatch(AuthActions.updateUserProfile(userForm));
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Headers
          title="Summary"
          leftIcon={<BackIcon />}
          onPressLeftIcon={() => NavigationService.goBack()}
        />
        <View>
          {/* Form */}
          <View style={styles.form}>
            <InputCustom
              label="Summary (Max 500 characters)"
              labelStyle={styles.labelTitle}
              placeholder="Summary"
              multiline={true}
              numberOfLines={10}
              maxLength={500}
              inputStyle={styles.inputStyle}
              defaultValue={user?.summary || ''}
              onChangeText={(text) => {
                setUserForm({ ...userForm, summary: text });
              }}
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

export default EditSummary;
