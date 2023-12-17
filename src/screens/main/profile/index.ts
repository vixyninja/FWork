export { default as Profile } from './Profile';
import EditContact from './Edit-Contact';
import EditCV from './Edit-CV';
import EditProfile from './Edit-Profile';
import EditSalary from './Edit-Salary';
import EditSummary from './Edit-Summary';
import Setting from './Setting';
import { routes } from '@/constants';
import { Screen } from '@/types';
export const profileScreens: Screen[] = [
  {
    name: routes.EDIT_PROFILE,
    component: EditProfile,
  },
  {
    name: routes.SETTING,
    component: Setting,
  },
  {
    name: routes.EDIT_CONTACT,
    component: EditContact,
  },
  {
    name: routes.EDIT_SUMMARY,
    component: EditSummary,
  },
  {
    name: routes.EDIT_SALARY,
    component: EditSalary,
  },
  {
    name: routes.EDIT_CV,
    component: EditCV,
  },
];
