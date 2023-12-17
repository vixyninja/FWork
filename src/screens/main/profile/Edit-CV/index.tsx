import React, { FunctionComponent } from 'react';

import { Button } from '@rneui/themed';
import { View } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';

import useStyles from './styles';
import { BackIcon } from '@/assets';
import { CV, Headers, StyledText } from '@/components/customs';
import { useAppSelector } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { getAuthUser } from '@/redux/selectors';

const EditCV: FunctionComponent = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUser);
  const [pdf, setPdf] = React.useState<DocumentPickerResponse[]>([]);
  return (
    <View style={styles.container}>
      <Headers
        title="CV/Resume"
        leftIcon={<BackIcon />}
        onPressLeftIcon={() => NavigationService.goBack()}
      />

      <View style={styles.containerUpload}>
        <StyledText style={styles.labelTitle} fontWeight="medium">
          Upload CV/Resume
        </StyledText>
        <CV setPdf={setPdf} />
      </View>
      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Save'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
        />
      </View>
    </View>
  );
};

export default EditCV;
