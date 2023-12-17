import { ViewStyle, StyleProp } from 'react-native';

import { HistoryJobType } from '@/redux/types';

export type JobTitleProps = {
  data: HistoryJobType;
  style?: StyleProp<ViewStyle>;
};
