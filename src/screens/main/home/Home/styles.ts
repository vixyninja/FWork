import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bigtitle: {
    fontSize: normalize(16),
    color: colors.grey5,
    fontFamily: 'Urbanist-VariableFont_wght',
  },
  smalltitle: {
    fontSize: normalize(20),
    color: colors.black,
  },
  avatarContainer: {
    padding: normalize(14),
  },
  bannerContainer: {
    marginTop: normalize(16),
    height: normalize(200),
    marginHorizontal: normalize(12),
  },
  banner: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(16),
  },
  rightAvatarIcon: {
    padding: normalize(10),
    borderWidth: 0,
  },
  searchIcon: {
    paddingStart: normalize(10),
  },
  refresh: {
    flex: 1,
  },
  searchContainer: {
    height: normalize(60),
  },
}));

export default useStyles;
