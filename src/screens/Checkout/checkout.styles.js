import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxNoProducts: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  noProducts: {
    fontSize: 25,
    color: themeColors.bgDark,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  title: {
    width: 190,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'left',
    color: themeColors.bgDark,
  },

  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
