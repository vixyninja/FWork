import React, { FunctionComponent } from 'react';

import {
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import useStyles from './styles';
import { BackIcon, FilterIcon, SearchIcon } from '@/assets';
import { Headers, InputCustom, JobStatus } from '@/components/customs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getHistoryApplyJob } from '@/redux/selectors';

const StatusApplication: FunctionComponent = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState<string>('');
  const job = useAppSelector(getHistoryApplyJob);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(JobActions.getHistoryApplyJob());
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Headers
          title="Status Job Application"
          leftIcon={<BackIcon />}
          titleStyle={styles.titleHeader}
          onPressLeftIcon={() => NavigationService.goBack()}
        />

        {/* Search bar */}
        <InputCustom
          placeholder="Search"
          value={value}
          onChangeText={setValue}
          leftIcon={<SearchIcon />}
          rightIcon={<FilterIcon />}
        />

        {/* Job Application */}
        <FlatList
          data={job?.data}
          renderItem={({ item }) => <JobStatus data={item} />}
          keyExtractor={(item) => item.uuid.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.containerApplicationJob}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StatusApplication;
