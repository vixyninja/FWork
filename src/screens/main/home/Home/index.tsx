import React, { FunctionComponent } from 'react';

import { Image } from '@rneui/themed';
import {
  View,
  RefreshControl,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { Recommendation, RecentJob } from './components';
import useStyles from './styles';
import { SearchIcon, images } from '@/assets';
import { Avatars, InputCustom } from '@/components/customs';
import { GhostLoading } from '@/components/shared';
import { routes } from '@/constants';
import { useAppDispatch, useAppSelector, useFcm } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions, CategoryActions, JobActions } from '@/redux/reducers';
import { getAuthUser, getListJob } from '@/redux/selectors';
import { Device, getNowTime } from '@/utils';

const IMAGE =
  'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);
  const dispatch = useAppDispatch();
  const data = useAppSelector(getListJob);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    dispatch(AuthActions.getUserInfo());
    dispatch(JobActions.getListData());
    dispatch(CategoryActions.getAllJobCategory());
    dispatch(JobActions.getJobByCategory(''));
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    dispatch(AuthActions.getUserInfo());
    dispatch(JobActions.getListData());
    dispatch(JobActions.getJobByCategory(''));
    dispatch(CategoryActions.getAllJobCategory());

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (!data) {
    return (
      <View style={styles.container}>
        <GhostLoading />
      </View>
    );
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          style={styles.refresh}
        />
      }
    >
      <View style={styles.container}>
        {/* Avatar */}
        <Avatars
          bigTitle={getNowTime()}
          smallTitle={user?.full_name}
          bigTitleStyle={styles.bigtitle}
          smallTitleStyle={styles.smalltitle}
          containerStyle={styles.avatarContainer}
          smallWeight="bold"
          rightIconPress={() => NavigationService.navigate(routes.NOTIFICATION)}
          source={{
            uri: user?.avatar?.url || IMAGE,
          }}
        />

        {/* SearchBar */}
        <TouchableHighlight
          style={styles.searchContainer}
          onPress={() => NavigationService.navigate(routes.SEARCH)}
          underlayColor={'transparent'}
        >
          <InputCustom
            placeholder="Search for a job or company"
            leftIcon={<SearchIcon />}
            leftIconContainerStyle={styles.searchIcon}
            showSoftInputOnFocus={false}
            editable={false}
          />
        </TouchableHighlight>

        {/* Banner  */}
        <View style={styles.bannerContainer}>
          <Image source={images.banner_home} style={styles.banner} />
        </View>

        {/* Recommendation Job */}
        <Recommendation />
        {/* Recent Job */}
        <RecentJob />
      </View>
    </ScrollView>
  );
};

export default Home;
