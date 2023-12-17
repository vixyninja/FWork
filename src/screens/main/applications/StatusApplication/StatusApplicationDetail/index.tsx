import React from 'react';

import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './styles';
import JobCard from '../JobCard';
import { BackIcon } from '@/assets';
import { Headers, JobTitle, StyledText, TagStatus } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import { HistoryJobType } from '@/redux/types';

interface RouteParams {
  data: HistoryJobType;
}

const StatusApplicatonDetail: React.FunctionComponent<RouteParams> = () => {
  const styles = useStyles();
  const route = useRoute();
  const data = (route.params as RouteParams)?.data;
  return (
    <View style={styles.container}>
      {/* Header */}
      <Headers
        title="Application Stages"
        leftIcon={<BackIcon />}
        titleStyle={styles.titleHeader}
        style={styles.header}
        onPressLeftIcon={() => NavigationService.goBack()}
      />

      {/* Info Job */}
      <JobCard data={data} style={styles.jobTitleStyle} />

      <View style={styles.containerStatus}>
        <StyledText style={styles.title}>Your Applications Status</StyledText>
        <TagStatus
          data={data.status}
          style={styles.tagContainer}
          titleStyle={styles.tagTitle}
        />
      </View>
      {/* Button Apply */}
      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Waiting...'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
        />
      </View>
    </View>
  );
};

export default StatusApplicatonDetail;
