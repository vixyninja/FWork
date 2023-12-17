import React from 'react';

import { Image } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { JobStatusType } from './types';
import TagStatus from '../TagStatus';
import { ChevronRightIcon, GoogleIcon } from '@/assets';
import { StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

const JobStatus: React.FunctionComponent<JobStatusType> = (props) => {
  const styles = useStyles();
  const handleDetail = () => {
    NavigationService.navigate(routes.STATUS_APPLICATION_DETAIL, {
      data: props.data,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleDetail}>
        <View style={styles.logoContainer}>
          {props.data.job.company.avatar.url ? (
            <Image
              source={{
                uri:
                  props.data.job.company.avatar.url ||
                  'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png',
              }}
              style={styles.logoStyle}
            />
          ) : (
            <GoogleIcon />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.titleContainer} onPress={handleDetail}>
        <StyledText
          style={styles.nameJobStyle}
          fontWeight="bold"
          numberOfLines={1}
        >
          {props.data.job.job_name}
        </StyledText>
        <StyledText style={styles.nameCompanyStyle} numberOfLines={1}>
          {props.data.job.company.company_name}
        </StyledText>
        <TagStatus data={props.data.status} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationContainer} onPress={handleDetail}>
        <ChevronRightIcon />
      </TouchableOpacity>
    </View>
  );
};

export default JobStatus;
