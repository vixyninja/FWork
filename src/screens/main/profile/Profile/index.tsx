import React, { FunctionComponent } from 'react';

import { View, ScrollView } from 'react-native';

import useStyles from './styles';
import {
  ChartIcon,
  CloseIcon,
  EditIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  ReactNativeIcon,
  SettingIcon,
  SummaryIcon,
  images,
} from '@/assets';
import {
  Avatars,
  ContactBlock,
  Headers,
  StyledText,
} from '@/components/customs';
import { routes } from '@/constants';
import { authentication } from '@/core';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { AuthActions } from '@/redux/reducers';
import { getAuthEnableBiometric, getAuthUser } from '@/redux/selectors';
const credentials = {
  username: 'tvhoai241223@gmail.com',
  password: 'admin',
};

const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);
  const styles = useStyles();
  const enableBiometric = useAppSelector(getAuthEnableBiometric);

  const handleChangeBiometric = async () => {
    // enabled biometric => disable biometric
    if (enableBiometric) {
      // remove biometric
      await authentication.removeCredentials();
      dispatch(AuthActions.toggleBiometric());
    } else {
      // disabled biometric => enabled biometric
      await authentication.saveCredentials(credentials);
      dispatch(AuthActions.toggleBiometric());
    }
  };

  const onPressItem = (e: string) => {
    // NavigationService.navigate(e)
    console.log(e.toString());
  };

  const contactInfomation = () => {
    return (
      <>
        <View style={styles.bottomItem}>
          {user?.address && (
            <>
              <View style={styles.icon}>
                <LocationIcon />
              </View>
              <StyledText style={styles.bottomItemText} numberOfLines={1}>
                {user.address}
              </StyledText>
            </>
          )}
        </View>
        {user?.phone_number && (
          <>
            <View style={styles.bottomItem}>
              <View style={styles.icon}>
                <PhoneIcon />
              </View>
              <StyledText style={styles.bottomItemText} numberOfLines={1}>
                {user?.phone_number}
              </StyledText>
            </View>
          </>
        )}
        {user?.email && (
          <>
            <View style={styles.bottomItem}>
              <View style={styles.icon}>
                <EmailIcon />
              </View>
              <StyledText style={styles.bottomItemText} numberOfLines={1}>
                {user?.email}
              </StyledText>
            </View>
          </>
        )}
      </>
    );
  };

  const summary = () => {
    return (
      <>
        {user?.summary && (
          <View style={styles.bottomItem}>
            <StyledText style={styles.bottomItemText} numberOfLines={7}>
              {user?.summary}
            </StyledText>
          </View>
        )}
      </>
    );
  };

  const myCV = () => {
    return (
      <Avatars
        source={images.pdf_default}
        bigTitle={'My_CV'}
        smallTitle={'431 KB'}
        bigTitleStyle={styles.bigTitlePdf}
        smallTitleStyle={styles.smallTitlePdf}
        rightIcon={<CloseIcon />}
        containerStyle={styles.itemWrapper}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Headers
        title="Profile"
        leftIcon={<ReactNativeIcon />}
        rightIcon={<SettingIcon />}
        titleStyle={styles.title}
        style={styles.header}
        onPressRightIcon={() => NavigationService.navigate(routes.SETTING)}
      />
      <View style={styles.body}>
        <Avatars
          bigTitle={user?.full_name || ''}
          smallTitle={user?.email || ''}
          rightIcon={<EditIcon />}
          bigTitleStyle={styles.bigTitleStyle}
          rightIconPress={() => NavigationService.navigate(routes.EDIT_PROFILE)}
          smallTitleStyle={styles.smallTitleStyle}
          bigWeight="bold"
          source={{
            uri:
              user?.avatar?.url ||
              'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
          }}
          smallWeight="variable"
          containerStyle={styles.itemContainer}
        />
        {/* Line */}
        <View style={styles.line} />
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Contact */}
          <ContactBlock
            BottomContent={contactInfomation()}
            containerStyle={styles.contactContainer}
            title="Contact Information"
            pressIcon={() => NavigationService.navigate(routes.EDIT_CONTACT)}
          />

          {/* Summary */}
          <ContactBlock
            BottomContent={summary()}
            icon={<SummaryIcon />}
            containerStyle={styles.contactContainer}
            title="Summary"
            pressIcon={() => NavigationService.navigate(routes.EDIT_SUMMARY)}
          />

          {/* Expected Salary */}
          <ContactBlock
            BottomContent={myCV()}
            icon={<ChartIcon />}
            containerStyle={styles.contactContainer}
            title="CV/Resume"
            pressIcon={() => NavigationService.navigate(routes.EDIT_CV)}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
