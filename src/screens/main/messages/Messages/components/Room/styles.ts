import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: normalize(12),
    paddingHorizontal: normalize(7),
  },
  leftIconHeader: {
    padding: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  middleIconHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
    marginEnd: normalize(10),
  },
  rightIconHeader: {
    padding: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  flex: {
    flex: 1,
  },
  headerTitle: {
    fontSize: normalize(18),
    paddingHorizontal: normalize(20),
  },
  body: {
    flex: 1,
    paddingHorizontal: normalize(14),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    marginVertical: normalize(10),
    width: Device.getDeviceWidth() - normalize(70),
  },
  sendIcon: {
    flex: 1,
    alignItems: 'center',
  },
}));
export default useStyles;
