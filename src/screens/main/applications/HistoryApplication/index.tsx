import React from 'react';

import { View, FlatList } from 'react-native';

import useStyles from './styles';
import { BackIcon } from '@/assets';
import { Headers, Job } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getHistoryApplyJob } from '@/redux/selectors';

const HistoryApplication: React.FunctionComponent = () => {
  const styles = useStyles();
  const job = useAppSelector(getHistoryApplyJob);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(JobActions.getHistoryApplyJob());
  }, []);

  return (
    <View style={styles.container}>
      <Headers
        title="History Application"
        leftIcon={<BackIcon />}
        style={styles.header}
        titleStyle={styles.title}
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      {/* Job Bookmark */}
      <FlatList
        data={job?.data}
        renderItem={({ item }) => (
          <Job
            data={item.job}
            pressTitle={() =>
              NavigationService.navigate(routes.JOB_DETAIL, {
                data: item,
              })
            }
          />
        )}
        keyExtractor={(item) => item.uuid.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.containerBookmarkJob}
      />
    </View>
  );
};

export default HistoryApplication;
