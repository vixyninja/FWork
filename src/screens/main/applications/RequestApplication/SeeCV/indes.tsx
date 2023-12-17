import React from 'react';

import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

import useStyles from './styles';
import { BackIcon } from '@/assets';
import { Headers, StyledText } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import { HistoryJobType } from '@/redux/types';
import { CustomToast } from '@/utils';

type RouteParams = {
  data: HistoryJobType;
};

const SeeCV: React.FunctionComponent = () => {
  const styles = useStyles();
  const route = useRoute();
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const { data } = route.params as RouteParams;
  return (
    <View style={styles.container}>
      <Headers
        title={`CV of ${data.owner.full_name}`}
        leftIcon={<BackIcon />}
        titleStyle={styles.titleHeader}
        onPressLeftIcon={() => NavigationService.goBack()}
      />

      <Pdf
        trustAllCerts={false}
        source={{ uri: data.cv.url }}
        style={styles.pdf}
        enablePaging
        onError={() => CustomToast('Server Error')}
        onPageChanged={(page) => setCurrentPage(page)}
        onLoadComplete={(numberOfPages) => setTotalPage(numberOfPages)}
      />
      <View style={styles.pageStyle}>
        <Button
          title={'Accept'}
          titleStyle={styles.accept}
          containerStyle={styles.acceptContainer}
        />
        <StyledText style={styles.pageCount}>
          {currentPage}/{totalPage}
        </StyledText>
      </View>
    </View>
  );
};

export default SeeCV;
