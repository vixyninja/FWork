import React from 'react';

import { FlatList, TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { StyledText } from '@/components/customs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { JobActions } from '@/redux/reducers';
import { getAllCategory } from '@/redux/selectors';

const CategoryBar = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const listCategory = useAppSelector(getAllCategory);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleFilterCategory = (name: string) => {
    dispatch(JobActions.getJobByCategory(name));
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setSelectedTab(index);
          handleFilterCategory(item.name);
        }}
        style={[
          styles.recentContainerStyle,
          selectedTab === index
            ? styles.recentContainerFocus
            : styles.recentContainerUnFocus,
        ]}
      >
        <StyledText
          style={[
            styles.recentTitleStyle,
            selectedTab === index
              ? styles.recentTitleFocus
              : styles.recentTitleUnFocus,
          ]}
        >
          {item.name}
        </StyledText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* Recent Job */}
      <View style={styles.titleContainer}>
        <StyledText fontWeight="bold" style={styles.titleStyle}>
          Recent Jobs
        </StyledText>
        <TouchableOpacity>
          <StyledText fontWeight="bold" style={styles.seeAllTitle}>
            See all
          </StyledText>
        </TouchableOpacity>
      </View>

      {/* Category */}
      <View>
        <FlatList
          data={listCategory?.data}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerList}
        />
      </View>
    </View>
  );
};
export default CategoryBar;
