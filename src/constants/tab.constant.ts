import {
  CategoryTabType,
  DetailEnum,
  DetailTabType,
  NotificationTabType,
} from '@/types';

export const NOTIFICATION_TABS: NotificationTabType[] = [
  {
    _id: 1,
    title: 'General',
  },
  {
    _id: 2,
    title: 'Applications',
  },
];

export const CATEGORY_TABS: CategoryTabType[] = [
  {
    _id: 0,
    title: 'All',
  },
  {
    _id: 1,
    title: 'Design',
  },
  {
    _id: 2,
    title: 'Technology',
  },
  {
    _id: 3,
    title: 'Finance',
  },
  {
    _id: 4,
    title: 'Development',
  },
  {
    _id: 5,
    title: 'Data Science',
  },
  {
    _id: 6,
    title: 'Security',
  },
];

export const DETAIL_TABS: DetailTabType[] = [
  {
    _id: 0,
    title: DetailEnum.JOB_DESCRIPTION,
  },
  {
    _id: 1,
    title: DetailEnum.MINIMUM_QUALIFICATIONS,
  },
  {
    _id: 2,
    title: DetailEnum.PERKS_AND_BENEFITS,
  },
  {
    _id: 3,
    title: DetailEnum.REQUIRED_SKILLS,
  },
  {
    _id: 4,
    title: DetailEnum.ABOUT,
  },
];
