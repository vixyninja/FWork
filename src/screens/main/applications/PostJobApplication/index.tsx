import React from 'react';

import { Button } from '@rneui/themed';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import useStyles from './styles';
import { BackIcon } from '@/assets';
import { Headers, InputCustom } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import { JobType } from '@/redux/types';
import { CustomToast } from '@/utils';

const PostJobApplication: React.FunctionComponent = () => {
  const styles = useStyles();
  const [postJob, setPostJob] = React.useState<JobType>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Headers
          title="Post Job Application"
          leftIcon={<BackIcon />}
          titleStyle={styles.title}
          onPressLeftIcon={() => NavigationService.goBack()}
        />
        <View style={styles.body}>
          <InputCustom placeholder="Job name" />
          <InputCustom placeholder="Salary" />
          <InputCustom placeholder="Job description" />
          <InputCustom placeholder="Minimum quantification" />
          <InputCustom placeholder="Perk" />
          <InputCustom placeholder="Require skill" />
          <InputCustom placeholder="Job level" />
          <InputCustom placeholder="Education" />
          <InputCustom placeholder="Experience" />
          <InputCustom placeholder="vacancy" />
        </View>
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            containerStyle={styles.buttonContainer}
            title={'Post'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            activeOpacity={0.5}
            onPress={() => CustomToast('Feature is updating')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostJobApplication;
