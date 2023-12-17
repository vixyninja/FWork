import React, { FunctionComponent } from 'react';

import { View, FlatList } from 'react-native';

import useStyles from './styles';
import { Job } from '@/components/customs';
import { routes } from '@/constants';
import { useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { getListSearchJob } from '@/redux/selectors';

const Found: FunctionComponent = () => {
  const styles = useStyles();
  const listSearch = useAppSelector(getListSearchJob);

  return (
    <View style={styles.container}>
      {/* Job Bookmark */}
      <FlatList
        data={listSearch?.data}
        renderItem={({ item }) => (
          <Job
            data={item}
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

export default Found;
