import React from 'react';

import { View } from 'react-native';

import useStyles from './styles';
import { TagProps } from './types';
import StyledText from '../StyledText';

const Tag: React.FunctionComponent<TagProps> = (props) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, props.style]}>
      <StyledText style={[styles.title, props.titleStyle]} fontWeight="medium">
        {props.title || 'Tag'}
      </StyledText>
    </View>
  );
};

export default Tag;
