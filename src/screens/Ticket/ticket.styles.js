import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBG: {
    width: width,
    height: height,
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.03,
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
    marginTop: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  items: {
    fontSize: 20,
    color: themeColors.bgDark,
  },
});
