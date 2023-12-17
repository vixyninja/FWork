import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleHeader: {
    fontSize: normalize(20),
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
  containerUpload: {
    paddingHorizontal: normalize(12),
  },
  inputStyle: {
    textAlignVertical: 'top',
    height: normalize(200),
  },
  containerButton: {
    width: normalize(Device.getDeviceWidth()),
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: normalize(20),
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
  modalContent: {
    justifyContent: 'center',
    top: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
}));
export default useStyles;
