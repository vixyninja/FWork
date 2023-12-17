import React, { FunctionComponent } from 'react';

import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { ScrollView, View } from 'react-native';

import { HeaderDetail, TabDetail } from './components';
import useStyles from './styles';
import { JobTitle, StyledText } from '@/components/customs';
import { ModalWrapContent } from '@/components/shared';
import { routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';
import { JobType } from '@/redux/types';

interface RouteParams {
  data: JobType;
}

const JobDetail: FunctionComponent = () => {
  const styles = useStyles();
  const route = useRoute();
  const data = (route.params as RouteParams)?.data;
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderDetail data={data} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Info Job */}
        <JobTitle data={data} style={styles.jobTitleStyle} />

        {/* Detail Job */}
        <TabDetail data={data} />

        {/* Button Apply */}
      </ScrollView>
      <View>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          title={'Apply'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          activeOpacity={0.5}
          onPress={() => setVisible(true)}
        />
      </View>
      {/* Modal */}
      <ModalWrapContent
        isVisible={visible}
        contentStyle={styles.modal}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modalWrapper}>
          <StyledText style={styles.textModal} fontWeight="bold">
            Apply Job
          </StyledText>
          <View style={styles.buttonWrapper}>
            <Button
              title={'Apply with CV'}
              buttonStyle={styles.buttonApplyCVStyle}
              titleStyle={styles.titleApplyCV}
              onPress={() => {
                NavigationService.navigate(routes.APPLY_CV, {
                  data: data,
                });
                setVisible(false);
              }}
            />
            <Button
              title={'Apply with Profile'}
              buttonStyle={styles.buttonApplyPFStyle}
              titleStyle={styles.titleApplyPF}
              onPress={() => {
                NavigationService.navigate(routes.APPLY_PROFILE);
                setVisible(false);
              }}
            />
          </View>
        </View>
      </ModalWrapContent>
    </View>
  );
};

export default JobDetail;
