import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  root: {
    width: '100%',
  },
  container: {
    backgroundColor: colors.grey1,
    width: (Device.getDeviceWidth() * 3) / 4,
    borderRadius: normalize(16),
  },
  content: {
    fontSize: normalize(14),
    padding: normalize(20),
  },
  time: {
    fontSize: normalize(10),
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  myChat: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  myChatContent: {
    color: 'white',
  },
  otherChat: {
    alignSelf: 'flex-start',
  },
}));

export default useStyles;
