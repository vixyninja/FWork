import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerContent: {
    flex: 1,
  },
  tagStyles: {
    width: normalize(160),
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: normalize(10),
  },
  logoStyle: {
    width: normalize(30),
    height: normalize(30),
  },
  logoContainer: {
    padding: normalize(10),
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: colors.disabled,
  },
  titleContainer: {
    paddingStart: normalize(14),
    paddingEnd: normalize(10),
    gap: normalize(10),
    flex: 1,
  },
  locationContainer: {
    padding: normalize(10),
  },
  nameJobStyle: {
    fontSize: normalize(16),
  },
  nameCompanyStyle: {
    fontSize: normalize(14),
    paddingBottom: normalize(5),
  },
  tagStylesS: {
    width: normalize(160),
    alignItems: 'center',
    backgroundColor: '#eef4ff',
    borderWidth: 0,
  },
  tagTitleS: {
    color: colors.primary,
  },
  tagStylesA: {
    width: normalize(160),
    alignItems: 'center',
    backgroundColor: '#e9fbef',
    borderWidth: 0,
  },
  tagTitleA: {
    color: '#08be75',
  },
  tagStylesR: {
    width: normalize(160),
    alignItems: 'center',
    backgroundColor: '#feeaea',
    borderWidth: 0,
  },
  tagTitleR: {
    color: '#f75656',
  },
  tagStylesP: {
    width: normalize(160),
    alignItems: 'center',
    backgroundColor: '#fef8e3',
    borderWidth: 0,
  },
  tagTitleP: {
    color: '#fbca17',
  },
  modalWrapper: {
    alignItems: 'center',
    borderRadius: 99,
    paddingTop: normalize(30),
  },
  modal: {
    borderTopEndRadius: normalize(40),
    borderTopLeftRadius: normalize(40),
    paddingBottom: normalize(12),
  },
  buttonWrapper: {
    flexDirection: 'row',
    paddingBottom: normalize(20),
    marginHorizontal: normalize(20),
  },
  buttonRight: {
    backgroundColor: colors.secondary,
    width: normalize(150),
    paddingVertical: normalize(14),
  },
  titleButton: {
    color: colors.primary,
    fontSize: normalize(16),
  },
  buttonLeft: {
    backgroundColor: colors.primary,
    width: normalize(150),
    paddingVertical: normalize(14),
  },
  buttonStyle: {
    borderRadius: normalize(99),
  },
}));
export default useStyles;
