import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: themeColors.bgDark,
    marginBottom: 30,
  },
  nothingHere: {
    fontSize: 20,
    color: themeColors.bgDark,
    fontWeight: '600',
  },
});
