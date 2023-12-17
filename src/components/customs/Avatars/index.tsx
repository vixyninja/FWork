import React from 'react';

import { Avatar } from '@rneui/themed';
import { View, TouchableOpacity } from 'react-native';

import useStyles from './styles';
import { AvatarProps } from './types';
import StyledText from '../StyledText';
import { NotificationIcon, images } from '@/assets';

const Avatars: React.FunctionComponent<AvatarProps> = (props) => {
  const styles = useStyles();
  const bigWeight = props.bigWeight || 'regular';
  const smallWeight = props.smallWeight || 'regular';
  return (
    <View style={[styles.container, props.containerStyle]}>
      {/* Avatar */}
      <Avatar
        source={props.source || images.default}
        size={54}
        rounded={true}
      />

      <View style={[styles.headerContentStyle]}>
        <StyledText
          style={[styles.text, props.bigTitleStyle]}
          fontWeight={bigWeight}
          numberOfLines={1}
        >
          {props.bigTitle}
        </StyledText>
        <StyledText
          style={[styles.text, props.smallTitleStyle]}
          fontWeight={smallWeight}
          numberOfLines={1}
        >
          {props.smallTitle}
        </StyledText>
      </View>

      <TouchableOpacity
        style={styles.headerIconRight}
        onPress={props.rightIconPress}
      >
        {props.rightIcon || <NotificationIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Avatars;
