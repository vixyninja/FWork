/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent } from 'react';

import { useRoute } from '@react-navigation/native';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { NotFound } from './components';
import Found from './components/Found';
import useStyles from './styles';
import { BackIcon, SearchIcon, SortingIcon } from '@/assets';
import { InputCustom, StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { useAppDispatch, useAppSelector } from '@/hooks';
import useDebounce from '@/hooks/useDebounce';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { getListSearchJob } from '@/redux/selectors';
import { Filter } from '@/redux/types';

export const FILTERS: Filter[] = [
  {
    _id: 1,
    name: 'Alphabetical (A to Z)',
  },
  {
    _id: 2,
    name: 'Most Relevant',
  },
  {
    _id: 3,
    name: 'Highest Salary',
  },
  {
    _id: 4,
    name: 'Newly Posted',
  },
  {
    _id: 5,
    name: 'Ending Soon',
  },
];

const Search: FunctionComponent = () => {
  const styles = useStyles();
  const route = useRoute();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [filter, setFilter] = React.useState<string>(FILTERS[0].name);
  const debounce = useDebounce(searchValue || '', 300);
  const listSearch = useAppSelector(getListSearchJob);
  React.useEffect(() => {
    dispatch(JobActions.searchJob(searchValue));
  }, [debounce]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* SearchBar */}
        <View style={styles.containerSearchBar}>
          <TouchableOpacity
            onPress={() => NavigationService.goBack()}
            style={styles.backIcon}
          >
            <BackIcon />
          </TouchableOpacity>

          <InputCustom
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder="Search for a job or company"
            leftIcon={<SearchIcon />}
            containerStyle={styles.inputContainer}
            leftIconContainerStyle={styles.searchIcon}
          />
        </View>

        {/* Body */}
        <View style={styles.titleContainer}>
          <StyledText fontWeight="bold" style={styles.titleStyle}>
            {listSearch?.data?.length || 0} found
          </StyledText>
          <StyledText fontWeight="medium" style={styles.filterTitle}>
            {filter}
          </StyledText>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <SortingIcon />
          </TouchableOpacity>
        </View>

        {listSearch?.data?.length !== 0 ? <Found /> : <NotFound />}

        <ModalWrapContent
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          contentStyle={styles.modalContainer}
        >
          <View style={styles.containerModal}>
            <TouchableOpacity
              onPress={() => {
                setFilter(FILTERS[0].name);
                setModalVisible(false);
              }}
            >
              <StyledText style={styles.modalItem} fontWeight="bold">
                Alphabetical (A to Z)
              </StyledText>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity
              onPress={() => {
                setFilter(FILTERS[1].name);
                setModalVisible(false);
              }}
            >
              <StyledText style={styles.modalItem} fontWeight="bold">
                Most Relevant
              </StyledText>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity
              onPress={() => {
                setFilter(FILTERS[2].name);
                setModalVisible(false);
              }}
            >
              <StyledText style={styles.modalItem} fontWeight="bold">
                Highest Salary
              </StyledText>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity
              onPress={() => {
                setFilter(FILTERS[3].name);
                setModalVisible(false);
              }}
            >
              <StyledText style={styles.modalItem} fontWeight="bold">
                Newly Posted
              </StyledText>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity
              onPress={() => {
                setFilter(FILTERS[4].name);
                setModalVisible(false);
              }}
            >
              <StyledText style={styles.modalItem} fontWeight="bold">
                Ending Soon
              </StyledText>
            </TouchableOpacity>
          </View>
        </ModalWrapContent>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;
