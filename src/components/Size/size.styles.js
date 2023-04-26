import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: '5%',
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#864E19',
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 50,
  },
  selected: {
    backgroundColor: '#864E19',
  },
  unselected: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
