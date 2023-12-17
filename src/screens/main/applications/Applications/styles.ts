import { makeStyles, normalize } from '@rneui/themed';

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
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    marginVertical: normalize(20),
    width: normalize(300),
    height: normalize(100),
    borderTopLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    elevation: 5,
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: normalize(20),
    flex: 1,
    alignSelf: 'center',
    marginStart: normalize(50),
    color: 'white',
  },
  postButton: {
    backgroundColor: '#007bff',
  },
  historyButton: {
    backgroundColor: '#ffc107',
  },
  statusButton: {
    backgroundColor: '#28a745',
  },
  requestButton: {
    backgroundColor: '#dc3545',
  },
  postNewButton: {
    backgroundColor: '#17a2b8',
  },
  icon: {
    width: normalize(50),
    height: normalize(50),
    alignSelf: 'center',
    marginEnd: normalize(20),
  },
}));
export default useStyles;
