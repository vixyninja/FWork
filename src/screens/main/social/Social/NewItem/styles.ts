import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  cardContainerStyle: {
    borderRadius: normalize(22),
  },
  containerAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  titleStyles: {
    fontSize: normalize(20),
    color: '#000',
    alignSelf: 'center',
  },
  descriptionStyles: {
    fontSize: normalize(14),
    color: '#000',
  },
  featureStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  likeButton: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: normalize(22),
  },
  nameStyle: {
    paddingStart: normalize(10),
  },
  titleStyle: {
    fontSize: normalize(18),
  },
}));

export default useStyles;
