import React, { FunctionComponent } from 'react';

import { FlatList, TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { TabDetailProps } from './types';
import InfoDetail from '../InfoDetail';
import { StyledText } from '@/components/customs';
import { DETAIL_TABS } from '@/constants';
import { DetailTabType } from '@/types';

const TabDetail: FunctionComponent<TabDetailProps> = (props) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState<DetailTabType>({
    _id: DETAIL_TABS[0]._id,
    title: DETAIL_TABS[0].title,
  });
  const data = props.data;
  const _renderItem = (item: DetailTabType, index: number) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          setSelectedTab({
            _id: item._id,
            title: item.title,
          })
        }
        style={[
          styles.detailContainer,
          selectedTab._id === index
            ? styles.detailContainerFocus
            : styles.detailContainerUnFocus,
        ]}
      >
        <StyledText
          style={[
            styles.detailTitleStyle,
            selectedTab._id === index
              ? styles.detailTitleStyleFocus
              : styles.detailTitleStyleUnFocus,
          ]}
        >
          {item.title}
        </StyledText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* List Info */}
      <FlatList
        data={DETAIL_TABS}
        renderItem={({ item, index }) => _renderItem(item, index)}
        keyExtractor={(item: DetailTabType) => item._id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
      />

      {/* Detail of every Infor*/}
      <InfoDetail selectab={selectedTab} data={data} />
    </View>
  );
};

export default TabDetail;
