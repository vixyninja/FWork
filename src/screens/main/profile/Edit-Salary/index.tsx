import React, { FunctionComponent } from 'react';

import { Button } from '@rneui/themed';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import useStyles from './styles';
import { BackIcon, EmailIcon, LocationIcon, PhoneIcon } from '@/assets';
import { Headers, InputCustom } from '@/components/customs';
import { useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { getAuthUser } from '@/redux/selectors';

const EditSalary: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);

  return (
    <View style={styles.container}>
      <Headers
        title="Expected Salary"
        leftIcon={<BackIcon />}
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          {/* Form */}
          <View style={styles.form}>
            <InputCustom
              label="Minimum"
              labelStyle={styles.labelTitle}
              placeholder="Minimum"
            />
            <InputCustom
              label="Maximum"
              labelStyle={styles.labelTitle}
              placeholder="Maximum"
            />
            <InputCustom
              label="Currency"
              labelStyle={styles.labelTitle}
              placeholder="Currency"
            />
            <InputCustom
              label="Frequency"
              labelStyle={styles.labelTitle}
              placeholder="Frequency"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Save'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
        />
      </View>
    </View>
  );
};

export default EditSalary;
