import { IId, Timestamp } from '@/types';

export type CategoryType = IId &
  Timestamp & {
    type: string;
    name: string;
  };

export type CategoryState = {
  jobs: CategoryType[];
};
