import React from 'react';

import { View } from 'react-native';

import useStyles from './styles';
import { StyledText } from '@/components/customs';

type NotificationProp = {
  title: string;
  body: string;
};

const NotificationItem: React.FunctionComponent<NotificationProp> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <StyledText style={styles.title} fontWeight="bold">
        {props.title}
      </StyledText>
      <StyledText style={styles.description}>{props.body}</StyledText>
    </View>
  );
};

export default NotificationItem;
