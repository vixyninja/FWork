import { makeStyles, normalize } from '@rneui/themed';

import { Device } from '@/utils';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: normalize(20),
  },
  header: {
    paddingHorizontal: normalize(12),
  },
  bigTitleStyle: {
    fontSize: normalize(18),
    color: colors.black,
  },
  smallTitleStyle: {
    fontSize: normalize(16),
    color: colors.grey2,
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.grey5,
    marginVertical: normalize(20),
  },
  body: {
    paddingHorizontal: normalize(14),
    flex: 1,
  },

  itemContainer: {
    marginVertical: normalize(10),
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContainer: {
    marginVertical: normalize(10),
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomItemText: {
    fontSize: normalize(14),
    flex: 1,
    paddingStart: normalize(10),
    marginVertical: normalize(10),
  },
  scrollContainer: {
    height: Device.getDeviceHeight(),
  },
  bigTitlePdf: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#000',
  },
  smallTitlePdf: {
    fontSize: normalize(12),
    color: '#000',
  },
  itemWrapper: {
    paddingStart: normalize(10),
    marginVertical: normalize(10),
    backgroundColor: '#fff2f2',
    borderRadius: normalize(12),
  },
}));

export default useStyles;
