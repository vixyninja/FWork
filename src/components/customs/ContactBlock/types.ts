import React from 'react';

import { ViewStyle, StyleProp } from 'react-native';

import { JobTypes } from '@/types';

export type ContactProps = {
  data?: JobTypes;
  pressIcon?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  BottomContent?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
};
