import React from 'react';

import { View, TouchableOpacity, FlatList } from 'react-native';

import useStyles from './styles';
import ItemMessage from '../ItemMessage';
import {
  BackIcon,
  EllipsisIcon,
  LockIcon,
  PhoneIcon,
  SendIcon,
} from '@/assets';
import { InputCustom, StyledText } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';

const arr = [1];

const Room: React.FunctionComponent = () => {
  const styles = useStyles();
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.leftIconHeader}
          onPress={() => NavigationService.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <StyledText fontWeight="bold" style={styles.headerTitle}>
          Google LLC
        </StyledText>
        <View style={styles.flex} />
        <TouchableOpacity style={styles.middleIconHeader}>
          <PhoneIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleIconHeader}>
          <LockIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightIconHeader}>
          <EllipsisIcon />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={arr}
          renderItem={({ item }) => <ItemMessage right={true} />}
          keyExtractor={(_, index) => index.toString()}
          style={{
            flex: 1,
          }}
        />
        <View style={styles.footer}>
          <InputCustom
            containerStyle={styles.inputStyle}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendIcon}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Room;
