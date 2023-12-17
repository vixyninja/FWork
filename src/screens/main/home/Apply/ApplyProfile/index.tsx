import React from 'react';

import { Button } from '@rneui/themed';
import { View, ScrollView } from 'react-native';

import useStyles from './styles';
import {
  BackIcon,
  ChartIcon,
  CloseIcon,
  EditIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
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
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { getAuthUser } from '@/redux/selectors';

const ApplyProfile: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);
  const styles = useStyles();
  const ContactInfomation = () => {
    return (
      <>
        <View style={styles.bottomItem}>
          <View style={styles.icon}>
            <LocationIcon />
          </View>
          <StyledText style={styles.bottomItemText} numberOfLines={1}>
            New York, United States
          </StyledText>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.icon}>
            <PhoneIcon />
          </View>
          <StyledText style={styles.bottomItemText} numberOfLines={1}>
            039 6855 834
          </StyledText>
        </View>
        <View style={styles.bottomItem}>
          <View style={styles.icon}>
            <EmailIcon />
          </View>
          <StyledText style={styles.bottomItemText} numberOfLines={1}>
            Vyhhps22919@fpt.edu.vn
          </StyledText>
        </View>
      </>
    );
  };

  const Summary = () => {
    return (
      <View style={styles.bottomItem}>
        <StyledText style={styles.bottomItemText} numberOfLines={7}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          expedita aliquam nisi, odio quis, ea est, vel enim eius vero rerum
          necessitatibus minima pariatur! Ex quaerat saepe sit molestias
          pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint quod, vel ut tenetur tempora accusamus fugit autem. Aliquid sunt
          asperiores at nihil eos soluta nulla veritatis! Blanditiis soluta odio
          nihil.
        </StyledText>
      </View>
    );
  };

  const ExpectedSalary = () => {
    return (
      <View style={styles.bottomItem}>
        <StyledText style={styles.bottomItemText} numberOfLines={4}>
          $10,000 - $25,000 /month (only you can see this)
        </StyledText>
      </View>
    );
  };

  const MyCV = () => {
    return (
      <Avatars
        source={images.pdf_default}
        bigTitle={'CV'}
        smallTitle={'0'}
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
        title="Apply Job"
        leftIcon={<BackIcon />}
        titleStyle={styles.title}
        style={styles.header}
        onPressLeftIcon={() => NavigationService.goBack()}
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
            BottomContent={<ContactInfomation />}
            containerStyle={styles.contactContainer}
            title="Contact Information"
            pressIcon={() => NavigationService.navigate(routes.EDIT_CONTACT)}
          />

          {/* Summary */}
          <ContactBlock
            BottomContent={<Summary />}
            icon={<SummaryIcon />}
            containerStyle={styles.contactContainer}
            title="Summary"
            pressIcon={() => NavigationService.navigate(routes.EDIT_SUMMARY)}
          />

          {/* Expected Salary */}
          <ContactBlock
            BottomContent={<ExpectedSalary />}
            icon={<ChartIcon />}
            containerStyle={styles.contactContainer}
            title="Expected Salary"
            pressIcon={() => NavigationService.navigate(routes.EDIT_SALARY)}
          />

          {/* Expected Salary */}
          <ContactBlock
            BottomContent={<MyCV />}
            icon={<ChartIcon />}
            containerStyle={styles.contactContainer}
            title="CV/Resume"
            pressIcon={() => NavigationService.navigate(routes.EDIT_CV)}
          />
        </ScrollView>
      </View>
      {/* Button */}
      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Submit'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
        />
      </View>
    </View>
  );
};

export default ApplyProfile;
