import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(14),
    marginTop: normalize(14),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(14),
    marginVertical: normalize(14),
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: normalize(16),
  },
  backIcon: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
  },
  inputContainer: {
    paddingEnd: normalize(30),
  },
  searchIcon: {
    paddingStart: normalize(10),
  },
  modalContainer: {
    borderRadius: normalize(10),
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.grey5,
  },
  containerModal: {
    marginHorizontal: normalize(14),
    gap: normalize(10),
    paddingVertical: normalize(10),
  },
  modalItem: {
    paddingVertical: normalize(6),
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterTitle: {
    marginEnd: normalize(10),
    fontSize: normalize(16),
    color: colors.error,
  },
}));

export default useStyles;
