import { ViewStyle, StyleProp } from 'react-native';

import { JobType } from '@/types';

export type JobProps = {
  data: JobType;
  pressIcon?: () => void;
  pressTitle?: () => void;
  pressLocation?: () => void;
  style?: StyleProp<ViewStyle>;
  pressTag?: () => void;
};
