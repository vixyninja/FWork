import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  contentContainerStyle: {
    marginHorizontal: normalize(14),
  },
  separator: {
    height: normalize(1),
    backgroundColor: colors.grey5,
    marginVertical: normalize(14),
  },
}));

export default useStyles;
