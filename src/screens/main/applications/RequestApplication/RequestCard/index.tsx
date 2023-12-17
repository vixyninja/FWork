import React from 'react';

import { Button, Image } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { RequestType } from './types';
import { ChevronRightIcon, GoogleIcon } from '@/assets';
import { StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

const RequestCard: React.FunctionComponent<RequestType> = (props) => {
  const styles = useStyles();
  const handleItem = () => {
    setVisible(true);
  };
  const [visible, setVisible] = React.useState<boolean>(false);
  const handleAccept = () => {};
  const handleSeeCV = () => {
    NavigationService.navigate(routes.SEE_CV, { data: props.data });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleItem}>
        <View style={styles.logoContainer}>
          {props.data.job.company.avatar.url ? (
            <Image
              source={{
                uri:
                  props.data.job.company.avatar.url ||
                  'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png',
              }}
              style={styles.logoStyle}
            />
          ) : (
            <GoogleIcon />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.titleContainer} onPress={handleItem}>
        <StyledText
          style={styles.nameJobStyle}
          fontWeight="bold"
          numberOfLines={1}
        >
          {props.data.job.job_name}
        </StyledText>
        <StyledText style={styles.nameCompanyStyle} numberOfLines={1}>
          {props.data.job.company.company_name}
        </StyledText>
        {/* <TagStatus data={props.data.status} /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationContainer} onPress={handleItem}>
        <ChevronRightIcon />
      </TouchableOpacity>

      {/* Modal */}
      <ModalWrapContent
        isVisible={visible}
        contentStyle={styles.modal}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.buttonWrapper}>
            <Button
              title={'See CV'}
              buttonStyle={styles.buttonLeft}
              containerStyle={styles.buttonStyle}
              onPress={handleSeeCV}
            />
            <View style={{ width: 10 }} />
            <Button
              title={'Accept'}
              buttonStyle={styles.buttonRight}
              titleStyle={styles.titleButton}
              containerStyle={styles.buttonStyle}
              onPress={handleAccept}
            />
          </View>
        </View>
      </ModalWrapContent>
    </View>
  );
};

export default RequestCard;
