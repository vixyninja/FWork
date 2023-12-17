import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: normalize(2),
    borderRadius: normalize(6),
    paddingHorizontal: normalize(6),
  },
  selectTitle: {
    paddingEnd: normalize(6),
    color: colors.white,
  },
}));
export default useStyles;
