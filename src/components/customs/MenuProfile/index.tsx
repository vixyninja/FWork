import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import StyledText from '../StyledText';
import { PlusIcon } from '@/assets';
import { MenuProfileType } from '@/constants';

export interface IMenu {
  onPressItem?: (e: string) => void;
  data: MenuProfileType;
}

const MenuProfile: React.FunctionComponent<IMenu> = (props) => {
  const styles = useStyles();
  const { _id, logoIcon: LogoIcon, title }: MenuProfileType = props.data;

  const handleItem = (title: string) => {
    if (props.onPressItem && title) {
      props.onPressItem(title.toString());
    }
  };
  return (
    <TouchableOpacity
      onPress={() => handleItem(title)}
      style={styles.container}
    >
      <View style={styles.content}>
        <LogoIcon />
        <StyledText style={styles.title}>{title}</StyledText>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  );
};

export default MenuProfile;
