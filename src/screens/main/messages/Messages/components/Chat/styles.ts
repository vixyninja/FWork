import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    paddingStart: normalize(10),
    flex: 1,
  },
  topTitle: {
    fontSize: normalize(16),
  },
  bottomTitle: {
    fontSize: normalize(14),
    maxWidth: normalize(200),
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  rightIconTop: {
    backgroundColor: colors.primary,
    width: normalize(24),
    height: normalize(24),
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: normalize(12),
    textAlign: 'center',
    color: colors.white,
    borderRadius: normalize(99),
  },
  rightIconBottom: {
    fontSize: normalize(12),
  },
}));

export default useStyles;
