import { Avatar } from '@/types';

export type CompanyType = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  uuid: string;
  company_name: string;
  description: string;
  address: string;
  avatar: Avatar;
};
