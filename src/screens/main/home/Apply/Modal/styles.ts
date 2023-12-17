import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  containerButton: {
    position: 'absolute',
    bottom: 0,
    width: normalize(Device.getDeviceWidth()),
    alignSelf: 'center',
  },
  buttonContainer: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20),
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
  wrapperContent: {
    width: Device.getDeviceWidth() / 1.3,
    height: Device.getDeviceHeight() / 2,
    backgroundColor: 'white',
    borderRadius: normalize(36),
    paddingTop: normalize(20),
  },
  wrapperHeader: {
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleModalSuccess: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: normalize(20),
  },
  titleModalError: {
    color: '#f75555',
    textAlign: 'center',
    fontSize: normalize(20),
  },
  textModal: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: normalize(10),
    fontSize: normalize(12),
    color: '#000',
  },
  image: {
    width: normalize(100),
    height: normalize(100),
  },
  wrapperButton: {
    justifyContent: 'flex-end',
  },
  buttonCancel: {
    backgroundColor: colors.secondary,
  },
  textCancel: {
    color: colors.primary,
  },
}));
export default useStyles;
