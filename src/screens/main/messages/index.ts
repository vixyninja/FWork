export { default as Messages } from './Messages';
import { Room } from './Messages/components';
import { routes } from '@/constants';
import { Screen } from '@/types';
export const messageScreens: Screen[] = [
  {
    name: routes.ROOM,
    component: Room,
  },
];
