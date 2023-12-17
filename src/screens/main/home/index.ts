import { ApplyCV, ApplyProfile } from './Apply';
import JobDetail from './JobDetail';
import Notification from './Notification';
import Search from './Search';
import { routes } from '@/constants';
import { Screen } from '@/types';

export { default as Home } from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.NOTIFICATION,
    component: Notification,
  },
  {
    name: routes.SEARCH,
    component: Search,
  },
  {
    name: routes.JOB_DETAIL,
    component: JobDetail,
  },
  {
    name: routes.APPLY_PROFILE,
    component: ApplyProfile,
  },
  {
    name: routes.APPLY_CV,
    component: ApplyCV,
  },
];
