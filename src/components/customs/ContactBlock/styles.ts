import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: colors.disabled,
    paddingHorizontal: normalize(14),
    backgroundColor: colors.background,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  title: {
    fontSize: normalize(18),
    flex: 1,
    paddingStart: normalize(10),
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.disabled,
  },
  bottom: {
    alignItems: 'center',
  },
}));

export default useStyles;
