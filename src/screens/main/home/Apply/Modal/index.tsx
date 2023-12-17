import React, { FunctionComponent } from 'react';

import { Button, Image } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './styles';
import { images } from '@/assets';
import { StyledText } from '@/components/customs';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

type ModalContentProps = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  values: 'success' | 'error';
};

const ModalContent: FunctionComponent<ModalContentProps> = (props) => {
  const styles = useStyles();
  const successAction = () => {
    props.setVisible(false);
    NavigationService.navigate(routes.HOME);
  };
  const errorAction = () => {
    props.setVisible(false);
  };
  const cancelAction = () => {
    props.setVisible(false);
  };

  // success
  if (props.values === 'success') {
    return (
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperHeader}>
          <Image source={images.check_icon} style={styles.image} />
          <StyledText style={styles.titleModalSuccess} fontWeight="bold">
            Congratulations!
          </StyledText>
          <StyledText style={styles.textModal}>
            You application has been successfully submitted. You can track the
            progress of your application through the Applications menu.
          </StyledText>
        </View>
        <View style={styles.wrapperButton}>
          <Button
            title={'Go to My Applications'}
            style={styles.button}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            onPress={successAction}
          />
          <Button
            title={'Cancel'}
            style={styles.button}
            containerStyle={styles.buttonContainer}
            buttonStyle={[styles.buttonStyle, styles.buttonCancel]}
            titleStyle={[styles.buttonTitle, styles.textCancel]}
            onPress={cancelAction}
          />
        </View>
      </View>
    );
  }

  // error
  return (
    <View style={styles.wrapperContent}>
      <View style={styles.wrapperHeader}>
        <Image source={images.error_icon} style={styles.image} />
        <StyledText style={styles.titleModalError} fontWeight="bold">
          Oops, Failed!
        </StyledText>
        <StyledText style={styles.textModal}>
          Please check your internet connection then try again. You application
          has been successfully submitted. You can track the progress of your
          application through the Applications menu.
        </StyledText>
      </View>
      <View style={styles.wrapperButton}>
        <Button
          title={'Try Again'}
          style={styles.button}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          onPress={errorAction}
        />
        <Button
          title={'Cancel'}
          style={styles.button}
          containerStyle={styles.buttonContainer}
          buttonStyle={[styles.buttonStyle, styles.buttonCancel]}
          titleStyle={[styles.buttonTitle, styles.textCancel]}
          onPress={cancelAction}
        />
      </View>
    </View>
  );
};

export default ModalContent;
