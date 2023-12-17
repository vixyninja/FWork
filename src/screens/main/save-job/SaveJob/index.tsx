import React from 'react';

import {
  FlatList,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import useStyles from './styles';
import {
  EllipsisIcon,
  FilterIcon,
  ReactNativeIcon,
  SearchIcon,
} from '@/assets';
import { Headers, InputCustom, Job } from '@/components/customs';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getListSaveJob } from '@/redux/selectors';

const SaveJob: React.FunctionComponent = () => {
  const styles = useStyles();
  const job = useAppSelector(getListSaveJob);
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(JobActions.getSaveJob());
  }, []);

  const handleRemove = (id: string) => {
    dispatch(JobActions.removeSaveJob(id));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Headers
          title="Save Jobs"
          leftIcon={<ReactNativeIcon />}
          titleStyle={styles.title}
          rightIcon={<EllipsisIcon />}
          style={styles.header}
        />

        <InputCustom
          placeholder="Search"
          value={value}
          onChangeText={setValue}
          leftIcon={<SearchIcon />}
          rightIcon={<FilterIcon />}
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
              pressLocation={() => handleRemove(item.uuid)}
            />
          )}
          keyExtractor={(item) => item.uuid.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.containerBookmarkJob}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SaveJob;
