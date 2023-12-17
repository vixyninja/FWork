import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  upload: {
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.grey3,
    paddingVertical: normalize(12),
    backgroundColor: colors.grey1,
    borderRadius: normalize(10),
    marginTop: normalize(10),
    height: normalize(80),
  },
  iconUpload: {
    alignItems: 'center',
  },
  bigTitlePdf: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  smallTitlePdf: {
    fontSize: normalize(12),
  },
}));
export default useStyles;
