import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
  },
  button: {
    backgroundColor: colors.primary,
  },
  containerButton: {
    width: normalize(Device.getDeviceWidth()),
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerUpload: {
    marginHorizontal: normalize(14),
  },
  labelTitle: {
    fontSize: normalize(14),
    color: colors.black,
    paddingBottom: normalize(10),
    fontWeight: 'normal',
  },
}));

export default useStyles;
