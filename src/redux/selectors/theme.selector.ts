import { RootState } from '@/hooks';

export const getTheme = (state: RootState) => state.theme.mode;
