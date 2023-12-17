import React from 'react';

import { View, FlatList } from 'react-native';

import RequestCard from './RequestCard';
import useStyles from './styles';
import { BackIcon } from '@/assets';
import { Headers } from '@/components/customs';
import { useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { getHistoryApplyJob } from '@/redux/selectors';

const RequestApplication: React.FunctionComponent = () => {
  const styles = useStyles();
  const historyList = useAppSelector(getHistoryApplyJob);
  return (
    <View style={styles.container}>
      <Headers
        title="Request Application"
        leftIcon={<BackIcon />}
        titleStyle={styles.titleHeader}
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      <FlatList
        data={historyList?.data}
        renderItem={({ item }) => <RequestCard data={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.containerApplicationJob}
      />
    </View>
  );
};

export default RequestApplication;
