import { io } from 'socket.io-client';

import { CLIENT } from '@/constants';

export const Socket = io(CLIENT);
