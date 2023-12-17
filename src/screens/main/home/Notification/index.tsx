import React from 'react';

import { FlatList, View } from 'react-native';
import { PushNotificationDeliveredObject } from 'react-native-push-notification';

import NotificationItem from './components/NotificationItem';
import useStyles from './styles';
import { BackIcon } from '@/assets';
import Header from '@/components/customs/Headers';
import { useFcm } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';

const Notification = () => {
  const styles = useStyles();
  const fcm = useFcm();
  const [notifiList, setNotifiList] = React.useState<
    PushNotificationDeliveredObject[]
  >([]);

  React.useEffect(() => {
    fcm.PushNotification.getDeliveredNotifications((notifications) => {
      setNotifiList([...notifiList, ...notifications]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={<BackIcon />}
        title="Notification"
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      <FlatList
        data={notifiList}
        renderItem={({ item }) => (
          <NotificationItem title={item.title} body={item.body} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Notification;
