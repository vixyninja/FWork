import React from 'react';

import { FlatList, View } from 'react-native';

import NewItem from './NewItem';
import useStyles from './styles';
import { StyledText } from '@/components/customs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { JobActions } from '@/redux/reducers';
import { getListUserPost } from '@/redux/selectors';

const Social = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const postJob = useAppSelector(getListUserPost);
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(() => {
    dispatch(JobActions.getUserPost());
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(JobActions.getUserPost());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={onRefresh}
        refreshing={refreshing}
        data={postJob?.data}
        renderItem={({ item }) => <NewItem data={item} />}
        keyExtractor={(item) => item.uuid.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Social;
