import { ViewStyle, StyleProp } from 'react-native';

import { JobType } from '@/redux/types';

export type JobTitleProps = {
  data: JobType;
  style?: StyleProp<ViewStyle>;
};
