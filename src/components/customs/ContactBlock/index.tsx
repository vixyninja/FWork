import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { ContactProps } from './types';
import StyledText from '../StyledText';
import { EditIcon, UserIcon } from '@/assets';

const ContactBlock: React.FunctionComponent<ContactProps> = (props) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.top}>
        <View style={styles.icon}>{props.icon || <UserIcon />}</View>
        <StyledText style={styles.title} fontWeight="bold">
          {props.title}
        </StyledText>
        <TouchableOpacity style={styles.icon} onPress={props.pressIcon}>
          <EditIcon />
        </TouchableOpacity>
      </View>

      {props.BottomContent && <View style={styles.line} />}

      <View style={styles.bottom}>
        {props.BottomContent && props.BottomContent}
      </View>
    </View>
  );
};

export default ContactBlock;
