import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  jobTitleStyle: {
    marginHorizontal: normalize(14),
    marginVertical: normalize(7),
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
  },
  modalWrapper: {
    alignItems: 'center',
    borderRadius: 99,
  },
  modal: {
    borderTopEndRadius: normalize(40),
    borderTopLeftRadius: normalize(40),
  },
  textModal: {
    fontSize: normalize(20),
    paddingVertical: normalize(40),
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginBottom: normalize(20),
    alignItems: 'center',
    marginHorizontal: normalize(20),
    gap: normalize(5),
  },
  buttonApplyCVStyle: {
    backgroundColor: colors.secondary,
    borderRadius: normalize(99),
    width: normalize(170),
    paddingVertical: normalize(14),
  },
  titleApplyCV: {
    color: colors.primary,
    fontSize: normalize(16),
  },
  buttonApplyPFStyle: {
    backgroundColor: colors.primary,
    borderRadius: normalize(99),
    paddingVertical: normalize(14),
    width: normalize(170),
  },
  titleApplyPF: {
    fontSize: normalize(16),
  },
}));

export default useStyles;
