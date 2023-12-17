import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    borderBottomWidth: 0,
    elevation: 2,
  },
  input: {
    fontSize: normalize(14),
    paddingStart: normalize(10),
    color: colors.black,
    fontFamily: 'Urbanist-VariableFont_wght',
  },
  placeHolder: {
    color: colors.grey5,
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    zIndex: 1000,
  },
  iconLeft: {
    paddingStart: normalize(10),
  },
}));

export default useStyles;
