import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: normalize(12),
    paddingHorizontal: normalize(12),
  },
  leftIconHeader: {
    padding: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  middleIconHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
    marginEnd: normalize(10),
  },
  rightIconHeader: {
    padding: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  flex: {
    flex: 1,
  },
  headerTitle: {
    fontSize: normalize(20),
    paddingHorizontal: normalize(20),
  },
  contentContainerStyle: {
    paddingHorizontal: normalize(8),
  },
  separator: {
    height: normalize(8),
  },
}));
export default useStyles;
