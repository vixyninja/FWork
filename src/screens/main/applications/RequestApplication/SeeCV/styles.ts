import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';
import { fontFamilySetup } from '@/utils/font';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleHeader: {
    fontSize: normalize(20),
  },
  pdf: {
    width: Device.getDeviceWidth(),
    height: Device.getDeviceHeight(),
  },
  pageStyle: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: normalize(10),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  accept: {
    fontFamily: fontFamilySetup.medium,
    width: normalize(200),
  },
  acceptContainer: {
    borderRadius: normalize(22),
  },
  pageCount: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    width: normalize(30),
    height: normalize(30),
  },
}));
export default useStyles;
