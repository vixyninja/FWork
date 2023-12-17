import React, { FunctionComponent } from 'react';

import { View, FlatList } from 'react-native';

import useStyles from './styles';
import CategoryBar from '../CategoryBar';
import { Job } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getListJobByCategory } from '@/redux/selectors';
import { JobType } from '@/redux/types';

const RecentJob: FunctionComponent = () => {
  const styles = useStyles();
  const job = useAppSelector(getListJobByCategory);
  const dispatch = useAppDispatch();
  const handleLocation = (id: string) => {
    dispatch(JobActions.saveJob(id));
  };
  return (
    <View>
      {/* Recent Jobs Flatlist*/}
      <CategoryBar />

      <View>
        <FlatList
          data={job?.data}
          renderItem={({ item }) => (
            <Job
              data={item}
              pressTitle={() =>
                NavigationService.navigate(routes.JOB_DETAIL, {
                  data: item,
                })
              }
              pressLocation={() => handleLocation(item.uuid)}
            />
          )}
          keyExtractor={(item: JobType) => item.uuid.toString()}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.containerRecommenJob}
        />
      </View>
    </View>
  );
};

export default RecentJob;
