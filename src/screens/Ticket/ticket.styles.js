import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  formattedDate: {
    width: 300,
    fontSize: 20,
    fontWeight: '600',
    color: themeColors.bgDark,
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: themeColors.bgDark,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: themeColors.bgDark,
    marginTop: 30,
  },
  nothingHere: {
    fontSize: 20,
    color: themeColors.bgDark,
    fontWeight: '600',
  },
  boxItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 20,
  },
  items: {
    fontSize: 20,
    color: themeColors.bgDark,
  },
});
