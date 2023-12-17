import React from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import useStyles from './styles';
import StyledText from '../StyledText';
import { CloseIcon } from '@/assets';

const SelecteDrop: React.FunctionComponent<any> = (props: any) => {
  const styles = useStyles();
  return (
    <View style={styles.selectContainer}>
      <StyledText style={styles.selectTitle}>{props.title}</StyledText>
      <TouchableOpacity
        onPress={() => {
          props.values(props.index);
        }}
      >
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SelecteDrop;
