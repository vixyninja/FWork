import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';
import { fontFamilySetup } from '@/utils/font';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: normalize(20),
  },
  body: {
    flex: 1,
    gap: normalize(10),
  },
  buttonContainer: {
    paddingHorizontal: normalize(20),
    marginVertical: normalize(20),
  },
  buttonStyle: {
    borderRadius: 99,
    paddingVertical: normalize(14),
  },
  buttonTitle: {
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
  },
  button: {
    backgroundColor: colors.primary,
  },
  containerButton: {
    width: normalize(Device.getDeviceWidth()),
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
}));
export default useStyles;
