import React from 'react';

import { Button } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import useStyles from './styles';
import {
  BackIcon,
  EyeOnIcon,
  ExitIcon,
  EditIcon,
  NextIcon,
  WorkIcon,
  SendIcon,
  PlusIcon,
  LockIcon,
  ReactNativeIcon,
  UserIcon,
  StarIcon,
  FilterIcon,
  SearchIcon,
  PhoneIcon,
} from '@/assets';
import { Headers, StyledText, Switch } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions, ThemeActions } from '@/redux/reducers';
import { getTheme } from '@/redux/selectors';
import { GoogleService } from '@/utils';

const Setting = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState<boolean>(false);
  const mode = useAppSelector(getTheme);
  const handleLogout = async () => {
    setVisible(false);
    await GoogleService.logout();
    dispatch(AuthActions.handleLogout());
  };
  const handleTheme = () => {
    if (mode === 'dark') {
      dispatch(ThemeActions.setTheme('light'));
    } else {
      dispatch(ThemeActions.setTheme('dark'));
    }
  };
  return (
    <View style={styles.container}>
      <Headers
        title="Settings"
        leftIcon={<BackIcon />}
        style={styles.headers}
        titleStyle={styles.title}
        onPressLeftIcon={() => NavigationService.goBack()}
      />
      <ScrollView>
        <View style={styles.wrapperBody}>
          <View style={styles.container_progress}>
            <View style={styles.progress_icon} />
            <View style={{ flexDirection: 'column' }}>
              <StyledText style={styles.Profile_Completed}>
                Profile Completed
              </StyledText>
            </View>
          </View>
          {/* Job Seeking Status */}
          <View style={styles.container_gr_Item}>
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <EditIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Job Seeking Status
              </StyledText>
            </TouchableOpacity>
          </View>
          {/* Account */}
          <View style={styles.container_gr_Item}>
            {/* Title About */}
            <View style={styles.containerItem}>
              <StyledText style={styles.Title_gr_Item}>Account</StyledText>
            </View>
            {/* Personal Information */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <NextIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Personal Information
              </StyledText>
            </TouchableOpacity>
            {/* Linked Accounts */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <WorkIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Linked Accounts
              </StyledText>
            </TouchableOpacity>
          </View>
          {/* General */}
          <View style={styles.container_gr_Item}>
            {/* Title General */}
            <View style={styles.containerItem}>
              <StyledText style={styles.Title_gr_Item}>General</StyledText>
            </View>
            {/* Notification */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <SendIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Notification
              </StyledText>
            </TouchableOpacity>
            {/* Application Issues */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <PlusIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Application Issues
              </StyledText>
            </TouchableOpacity>
            {/*Timezone */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <LockIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Timezone
              </StyledText>
            </TouchableOpacity>
            {/* Security */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <FilterIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Security
              </StyledText>
            </TouchableOpacity>
            {/* Language */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <ReactNativeIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Language (English)
              </StyledText>
            </TouchableOpacity>
            {/* dark theme */}
            <View style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <EyeOnIcon />
              </View>
              <StyledText style={styles.titleItem} fontWeight="medium">
                Dark Mode
              </StyledText>
              <Switch
                value={mode === 'dark' ? true : false}
                onValueChange={handleTheme}
              />
            </View>
            {/* Hepl Center */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <UserIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Help Center
              </StyledText>
            </TouchableOpacity>
            {/* Invite Friends */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <StarIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Invite Friends
              </StyledText>
            </TouchableOpacity>
            {/* Rate us */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <PhoneIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Rate us
              </StyledText>
            </TouchableOpacity>
          </View>
          {/* About */}
          <View style={styles.container_gr_Item}>
            {/* Title About */}
            <View style={styles.containerItem}>
              <StyledText style={styles.Title_gr_Item}>About</StyledText>
            </View>
            {/* Privacy & Policy */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <LockIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Privacy & Policy
              </StyledText>
            </TouchableOpacity>
            {/* Terms of Services */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <EyeOnIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                Terms of Services
              </StyledText>
            </TouchableOpacity>
            {/* About */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <SearchIcon />
              </View>
              <StyledText style={[styles.titleItem]} fontWeight="medium">
                About
              </StyledText>
            </TouchableOpacity>
          </View>
          {/* Job Seeking Status */}
          <View style={styles.container_gr_Item}>
            {/* Deactivate My Account */}
            <TouchableOpacity style={styles.containerItem}>
              <View style={styles.containerIcon}>
                <ExitIcon />
              </View>
              <StyledText
                style={[styles.titleItem, styles.titleItemRed]}
                fontWeight="medium"
              >
                Deactivate My Account
              </StyledText>
            </TouchableOpacity>
            {/* log out */}
            <TouchableOpacity
              style={styles.containerItem}
              onPress={() => setVisible(true)}
            >
              <View style={styles.containerIcon}>
                <ExitIcon />
              </View>
              <StyledText
                style={[styles.titleItem, styles.titleItemRed]}
                fontWeight="medium"
              >
                Logout
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Modal */}
      <ModalWrapContent
        isVisible={visible}
        contentStyle={styles.modal}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modalWrapper}>
          <StyledText style={styles.textModal} fontWeight="bold">
            Logout
          </StyledText>
          <StyledText style={styles.text} fontWeight="bold">
            Are you sure you want to log out?
          </StyledText>
          <View style={styles.buttonWrapper}>
            <Button
              title={'Cancel'}
              buttonStyle={styles.buttonLeft}
              containerStyle={styles.buttonStyle}
              onPress={() => setVisible(false)}
            />
            <View style={{ width: 10 }} />
            <Button
              title={'Yes, Logout'}
              buttonStyle={styles.buttonRight}
              titleStyle={styles.titleButton}
              containerStyle={styles.buttonStyle}
              onPress={handleLogout}
            />
          </View>
        </View>
      </ModalWrapContent>
    </View>
  );
};

export default Setting;
