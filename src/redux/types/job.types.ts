import { DocumentPickerResponse } from 'react-native-document-picker';

import { User } from './auth.type';
import { CategoryType } from './category.type';
import { CompanyType } from './company.type';
import { Avatar, IId, PayloadHttp, PayloadHttpList, Timestamp } from '@/types';

export type JobState = Partial<{
  listData: PayloadHttpList<JobType>;
  detailData: PayloadHttp<JobType>;
  category: PayloadHttpList<CategoryType>;
  listJobByCategory: PayloadHttpList<JobType>;
  historyApplyJob: PayloadHttpList<HistoryJobType>;
  listPostJob: PayloadHttpList<PostJobType>;
  listSearchJob: PayloadHttpList<JobType>;
  listSaveJob: PayloadHttpList<JobSaveType>;
  listUserPost: PayloadHttpList<PostJobType>;
}>;

export enum FilterEnum {
  ALL = 'ALL',
  ALPHA_BETICAL = 'Alphabetical (A to Z)',
  MOST_RELEVANT = 'Most Relevant',
  HIGHEST_SALARY = 'Highest Salary',
  NEWLY_POSTED = 'Newly Posted',
  ENDING_SOON = 'Ending Soon',
}

export type HistoryJobType = Timestamp &
  IId & {
    status: string;
    email: string;
    full_name: string;
    motivation_letter: string;
    cv: Avatar;
    job: JobType;
    owner: User;
  };

export type Filter = {
  _id: number;
  name: string;
};

export type JobType = IId &
  Timestamp & {
    job_name: string;
    salary: number;
    jod_description: string;
    minimum_quantification: string[];
    perk: string[];
    require_skill: string[];
    job_level: string;
    education: string;
    experience: string;
    vacancy: number;
    company: CompanyType;
    category: CategoryType;
  };

export type ApplyJobType = {
  full_name: string;
  email: string;
  motivation: string;
  image: DocumentPickerResponse;
  job: string;
};

export type PostJobType = IId &
  Timestamp & {
    title: string;
    description: string;
    favorite: number;
    owner: User;
    image: Avatar;
  };

export type JobSaveType = IId &
  Timestamp & {
    isSave: boolean;
    job: JobType;
    owner: User;
  };
