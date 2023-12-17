import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  jobTitleStyle: {
    marginHorizontal: normalize(14),
    marginVertical: normalize(16),
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
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(20),
  },
  title: {
    fontSize: normalize(16),
  },
  tagContainer: {
    width: '80%',
    paddingVertical: normalize(10),
  },
  tagTitle: {
    fontSize: normalize(18),
  },
  titleHeader: {
    fontSize: normalize(20),
  },
  header: {},
}));

export default useStyles;
