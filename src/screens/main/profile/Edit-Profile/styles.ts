import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  avatarStyle: {
    width: normalize(150),
    height: normalize(150),
    borderRadius: normalize(999),
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.grey5,
    marginVertical: normalize(20),
    marginHorizontal: normalize(14),
  },
  form: {
    gap: normalize(30),
    paddingHorizontal: normalize(14),
  },
  labelTitle: {
    fontSize: normalize(14),
    color: colors.black,
    paddingBottom: normalize(10),
    fontWeight: 'normal',
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
    flex: 1,
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
