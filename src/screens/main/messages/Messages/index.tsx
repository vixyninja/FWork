/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { View, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { Chat } from './components';
import useStyles from './styles';
import {
  BookmarkBlackIcon,
  EllipsisIcon,
  ReactNativeIcon,
  SearchIcon,
  SendIcon,
} from '@/assets';
import { StyledText } from '@/components/customs';

const Messages = () => {
  const styles = useStyles();
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.leftIconHeader}>
          <ReactNativeIcon />
        </TouchableOpacity>
        <StyledText fontWeight="bold" style={styles.headerTitle}>
          Message
        </StyledText>
        <View style={styles.flex} />
        <TouchableOpacity style={styles.middleIconHeader}>
          <SearchIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightIconHeader}>
          <EllipsisIcon />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}
      <FlatList
        data={Array(5).fill(0)}
        renderItem={({ item }) => <Chat />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Messages;
