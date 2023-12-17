import { ValueOf } from 'react-native-gesture-handler/lib/typescript/typeUtils';

export type NotificationTabType = {
  _id: number;
  title: string;
};
export type CategoryTabType = {
  _id: number;
  title: string;
};
export enum DetailEnum {
  JOB_DESCRIPTION = 'Job Description',
  MINIMUM_QUALIFICATIONS = 'Minimum Qualifications',
  PERKS_AND_BENEFITS = 'Perks and Benefits',
  REQUIRED_SKILLS = 'Required Skills',
  ABOUT = 'About',
}

export type DetailTabType = {
  _id: number;
  title: ValueOf<typeof DetailEnum>;
};
