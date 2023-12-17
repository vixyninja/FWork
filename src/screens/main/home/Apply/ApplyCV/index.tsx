import React from 'react';

import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';

import useStyles from './styles';
import ModalContent from '../Modal';
import { BackIcon, EmailIcon } from '@/assets';
import { CV, Headers, InputCustom, StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { useAppDispatch } from '@/hooks';
import { NavigationService } from '@/navigation/NavigationService';
import { JobActions } from '@/redux/reducers';
import { ApplyJobType, JobType } from '@/redux/types';
import { isValidEmail } from '@/utils';
interface RouteParams {
  data: JobType;
}
const ApplyCV: React.FunctionComponent<RouteParams> = (props) => {
  const styles = useStyles();
  const route = useRoute();
  const data = (route.params as RouteParams)?.data;
  const dispatch = useAppDispatch();
  const [pdf, setPdf] = React.useState<DocumentPickerResponse[]>([]);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [titleModal, setTitleModal] = React.useState<'error' | 'success'>(
    'error'
  );
  const [formApply, setFormApply] = React.useState<Partial<ApplyJobType>>({});

  React.useEffect(() => {
    setFormApply({ ...formApply, image: pdf[0] });
  }, [pdf]);

  const handleSubmit = () => {
    if (
      formApply.email === undefined ||
      formApply.full_name === undefined ||
      formApply.image?.uri === undefined ||
      formApply.full_name === '' ||
      isValidEmail(formApply.email) === false
    ) {
      setTitleModal('error');
      setVisible(true);
      return;
    } else {
      const form = new FormData();
      form.append('full_name', formApply.full_name);
      form.append('email', formApply.email);
      form.append('motivation_letter', formApply.motivation || '');
      form.append('job', data.uuid);
      form.append('image', formApply.image);
      dispatch(JobActions.applyJob(form));
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Headers
        title="Apply Job"
        leftIcon={<BackIcon />}
        titleStyle={styles.titleHeader}
        onPressLeftIcon={() => NavigationService.goBack()}
      />

      {/* Form */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.form}>
          <InputCustom
            label="Full Name"
            labelStyle={styles.labelTitle}
            placeholder="Full Name"
            value={formApply.full_name}
            onChangeText={(text) =>
              setFormApply({ ...formApply, full_name: text })
            }
          />
          <InputCustom
            label="Email"
            labelStyle={styles.labelTitle}
            placeholder="Email"
            rightIcon={<EmailIcon />}
            value={formApply.email}
            onChangeText={(text) => setFormApply({ ...formApply, email: text })}
          />
          <View style={styles.containerUpload}>
            <StyledText style={styles.labelTitle} fontWeight="medium">
              Upload CV/Resume
            </StyledText>
            <CV setPdf={setPdf} />
          </View>

          <View>
            <InputCustom
              label="Motivation Letter (Optional)"
              labelStyle={styles.labelTitle}
              // defaultValue={formUser?.email || ''}
              numberOfLines={7}
              multiline={true}
              inputStyle={styles.inputStyle}
              maxLength={300}
              value={formApply.motivation}
              onChangeText={(text) =>
                setFormApply({ ...formApply, motivation: text })
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Button */}
      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Submit'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
          onPress={handleSubmit}
        />
      </View>

      {/* Modal */}

      <ModalWrapContent
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        contentStyle={styles.modalContent}
        animationIn={'slideInRight'}
        animationOut={'slideOutLeft'}
      >
        <ModalContent setVisible={setVisible} values={titleModal} />
      </ModalWrapContent>
    </ScrollView>
  );
};

export default ApplyCV;
