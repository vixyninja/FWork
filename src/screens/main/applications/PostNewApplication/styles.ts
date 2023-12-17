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
  inputDescriptionContainer: {
    marginVertical: normalize(12),
  },
  inputDescription: {
    textAlignVertical: 'top',
    height: normalize(300),
  },
  body: {
    flex: 1,
  },
  upload: {
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.grey3,
    paddingVertical: normalize(12),
    backgroundColor: colors.grey1,
    borderRadius: normalize(10),
    marginTop: normalize(10),
    height: normalize(80),
    marginHorizontal: normalize(10),
  },
  iconUpload: {
    alignItems: 'center',
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
  modalContent: {
    borderTopEndRadius: normalize(20),
    borderTopStartRadius: normalize(20),
  },
  modalContainer: {
    paddingBottom: normalize(26),
    paddingHorizontal: normalize(26),
    paddingTop: normalize(16),
  },
  titleModal: {
    fontSize: normalize(18),
    paddingBottom: normalize(20),
  },
  iconModalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(20),
  },
  icon: {
    width: normalize(70),
    height: normalize(50),
    alignItems: 'center',
  },
  imageContainer: {
    width: Device.getDeviceWidth() - 20,
    height: normalize(200),
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconClose: {
    width: normalize(30),
    height: normalize(30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: colors.secondary,
    borderRadius: normalize(99),
  },
}));
export default useStyles;
