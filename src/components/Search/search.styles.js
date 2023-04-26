import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginTop: 80,
    width: '90%',
    alignSelf: 'center',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    padding: 8,
    backgroundColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  input: {
    flex: 1,
    fontWeight: '600',
    color: '#444',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  btn: {
    borderRadius: 25,
    backgroundColor: '#864E19',
    padding: 8,
  },
});
