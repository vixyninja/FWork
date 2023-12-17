import React from 'react';

import { ScrollView, TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import {
  EllipsisIcon,
  HistoryIcon,
  PostIcon,
  ReactNativeIcon,
  RequestIcon,
  StatusIcon,
} from '@/assets';
import { Headers, StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

const Application: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Headers
        title="Application"
        leftIcon={<ReactNativeIcon />}
        titleStyle={styles.title}
        rightIcon={<EllipsisIcon />}
        style={styles.header}
      />
      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          {/* Post Job*/}
          <TouchableOpacity
            style={[styles.button, styles.postButton]}
            onPress={() =>
              NavigationService.navigate(routes.POST_JOB_APPLICATION)
            }
          >
            <StyledText style={styles.buttonTitle} fontWeight="medium">
              Post Jobs
            </StyledText>
            <View style={styles.icon}>
              <PostIcon />
            </View>
          </TouchableOpacity>

          {/* Post New */}
          <TouchableOpacity
            style={[styles.button, styles.postNewButton]}
            onPress={() =>
              NavigationService.navigate(routes.POST_NEW_APPLICATION)
            }
          >
            <StyledText style={styles.buttonTitle}>Post New</StyledText>
            <View style={styles.icon}>
              <RequestIcon />
            </View>
          </TouchableOpacity>

          {/* History */}
          <TouchableOpacity
            style={[styles.button, styles.historyButton]}
            onPress={() =>
              NavigationService.navigate(routes.HISTORY_APPLICATION)
            }
          >
            <StyledText style={styles.buttonTitle}>History Jobs</StyledText>
            <View style={styles.icon}>
              <HistoryIcon />
            </View>
          </TouchableOpacity>

          {/* Status */}
          <TouchableOpacity
            style={[styles.button, styles.statusButton]}
            onPress={() =>
              NavigationService.navigate(routes.STATUS_APPLICATION)
            }
          >
            <StyledText style={styles.buttonTitle}>Status Apply</StyledText>
            <View style={styles.icon}>
              <StatusIcon />
            </View>
          </TouchableOpacity>

          {/* Request */}
          <TouchableOpacity
            style={[styles.button, styles.requestButton]}
            onPress={() =>
              NavigationService.navigate(routes.REQUEST_APPLICATION)
            }
          >
            <StyledText style={styles.buttonTitle}>Request Apply</StyledText>
            <View style={styles.icon}>
              <RequestIcon />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Application;
