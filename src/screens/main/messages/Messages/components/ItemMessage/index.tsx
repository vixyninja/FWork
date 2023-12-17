import React from 'react';

import { Text, View } from 'react-native';

import useStyles from './styles';
import { StyledText } from '@/components/customs';
type Props = {
  right?: boolean;
};
const ItemMessage: React.FunctionComponent<Props> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <View style={[styles.container, props.right && styles.myChat]}>
        <StyledText
          style={[styles.content, props.right && styles.myChatContent]}
        >
          Good morning Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nisi, error accusamus placeat reiciendis mollitia dignissimos quisquam
          excepturi corporis molestiae sunt! Culpa incidunt, blanditiis quisquam
          voluptatibus iure nam reiciendis ex consectetur!
        </StyledText>
        <StyledText style={[styles.time, props.right && styles.myChatContent]}>
          16:00
        </StyledText>
      </View>
    </View>
  );
};

export default ItemMessage;
