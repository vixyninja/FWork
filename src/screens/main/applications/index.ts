export { default as Applications } from './Applications';
import Application from './Applications';
import HistoryApplication from './HistoryApplication';
import PostJobApplication from './PostJobApplication';
import PostNewApplication from './PostNewApplication';
import RequestApplication from './RequestApplication/indes';
import SeeCV from './RequestApplication/SeeCV/indes';
import StatusApplication from './StatusApplication';
import StatusApplicatonDetail from './StatusApplication/StatusApplicationDetail';
import { routes } from '@/constants';
import { Screen } from '@/types';
export const applicationScreens: Screen[] = [
  {
    name: routes.APPLICATIONS,
    component: Application,
  },
  {
    name: routes.STATUS_APPLICATION,
    component: StatusApplication,
  },
  {
    name: routes.POST_NEW_APPLICATION,
    component: PostNewApplication,
  },
  {
    name: routes.HISTORY_APPLICATION,
    component: HistoryApplication,
  },
  {
    name: routes.REQUEST_APPLICATION,
    component: RequestApplication,
  },
  {
    name: routes.STATUS_APPLICATION_DETAIL,
    component: StatusApplicatonDetail,
  },
  {
    name: routes.SEE_CV,
    component: SeeCV,
  },
  {
    name: routes.POST_JOB_APPLICATION,
    component: PostJobApplication,
  },
];
