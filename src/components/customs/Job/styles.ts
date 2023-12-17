import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

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
  bottom: {
    gap: normalize(6),
    marginVertical: normalize(10),
  },
  titleContainer: {
    flex: 1,
    paddingLeft: normalize(14),
    marginEnd: normalize(30),
  },
  rightIcon: {
    alignSelf: 'flex-start',
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(99),
  },
  leftIcon: {
    width: normalize(50),
    height: normalize(50),
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.disabled,
    borderRadius: normalize(16),
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.disabled,
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  zeroHeight: {
    height: 0,
    borderWidth: 0,
  },
  tagContainer: {
    marginStart: normalize(10),
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    paddingLeft: normalize(14),
    marginEnd: normalize(30),
  },
  nameJob: {
    fontSize: normalize(14),
  },
  address: {
    fontSize: normalize(14),
    maxWidth: normalize(200),
  },
  salary: {
    fontSize: normalize(15),
    color: colors.primary,
  },
  tagStyles: {
    marginHorizontal: normalize(4),
  },
}));

export default useStyles;
