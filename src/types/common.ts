import { FunctionComponent } from 'react';

import { routes } from '@/constants';

export type IId = {
  uuid: string;
};

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};

export type Pagination = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
};

export type BaseResponse<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T;
};

export type BaseResponseList<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T[];
};

export interface PayloadHttpList<T> {
  code?: number;
  message?: string;
  data?: T[];
}

export interface PayloadHttp<T> {
  code?: number;
  message?: string;
  data?: T;
}

export type Avatar = IId &
  Timestamp & {
    public_id: string;
    url: string;
    secure_url: string;
  };
