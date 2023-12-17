import React from 'react';

import { Image } from '@rneui/themed';
import { View, TouchableOpacity } from 'react-native';

import useStyles from './styles';
import { JobProps } from './types';
import StyledText from '../StyledText';
import Tag from '../Tag';
import { BookmarkIcon, GoogleIcon, ReactNativeIcon, images } from '@/assets';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';
import { JobType, JobTypes } from '@/types';

const Job: React.FunctionComponent<JobProps> = (props) => {
  const styles = useStyles();
  const job: Partial<JobType> = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.leftIcon}>
          {job.company?.avatar && (
            <Image
              source={{
                uri:
                  job.company?.avatar?.url ||
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
              }}
              style={styles.rightIcon}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() =>
            NavigationService.navigate(routes.JOB_DETAIL, {
              data: job,
            })
          }
        >
          <StyledText
            style={styles.nameJob}
            fontWeight="bold"
            numberOfLines={1}
          >
            {job.job_name}
          </StyledText>
          <StyledText>{job.company?.company_name}</StyledText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightIcon}
          onPress={props.pressLocation}
        >
          <BookmarkIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <View style={[styles.leftIcon, styles.zeroHeight]} />
          <StyledText style={[styles.text, styles.address]} numberOfLines={2}>
            {job.company?.address}
          </StyledText>
        </View>
        <View style={styles.bottomItem}>
          <View style={[styles.leftIcon, styles.zeroHeight]} />
          <StyledText
            style={[styles.text, styles.salary]}
            fontWeight="medium"
            numberOfLines={1}
          >
            {job.salary}
          </StyledText>
        </View>
        <View style={styles.bottomItem}>
          <View
            style={[styles.leftIcon, styles.zeroHeight, styles.tagContainer]}
          />
          <Tag title={job.category?.name} style={styles.tagStyles} />
        </View>
      </View>
    </View>
  );
};

export default Job;
