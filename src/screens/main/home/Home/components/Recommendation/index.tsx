import React, { FunctionComponent } from 'react';

import { View, TouchableOpacity, FlatList } from 'react-native';

import useStyles from './styles';
import { Job, StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getListJob } from '@/redux/selectors';
import { JobType } from '@/redux/types';

const Recommendation: FunctionComponent = () => {
  const styles = useStyles();
  const job = useAppSelector(getListJob);
  const dispatch = useAppDispatch();

  const handleLocation = (id: string) => {
    dispatch(JobActions.saveJob(id));
  };

  return (
    <View>
      {/* Recommendation */}
      <View style={styles.titleContainer}>
        <StyledText fontWeight="bold" style={styles.titleStyle}>
          Recommendation
        </StyledText>
        <TouchableOpacity onPress={() => console.log('press see all')}>
          <StyledText fontWeight="bold" style={styles.seeAllTitle}>
            See all
          </StyledText>
        </TouchableOpacity>
      </View>

      {/* Recommendation Flatlist*/}
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
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.containerRecommenJob}
        />
      </View>
    </View>
  );
};

export default Recommendation;
