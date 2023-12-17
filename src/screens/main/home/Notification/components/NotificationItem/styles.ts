import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    backgroundColor: colors.secondary,
    padding: normalize(6),
    borderRadius: normalize(6),
  },
  title: {
    fontSize: normalize(14),
  },
  description: {
    fontSize: normalize(16),
  },
}));
export default useStyles;
