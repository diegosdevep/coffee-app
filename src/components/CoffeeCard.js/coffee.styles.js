import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: themeColors.bgDark,
    height: 350,
    width: 250,
  },
  innerContainer: {
    // backgroundColor: 'red',
    borderRadius: 30,
    flex: 1,
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    elevation: 3,
  },
  img: {
    height: 150,
    width: 150,
    top: -60,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 10,
  },
  starsBox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 1,
    paddingHorizontal: 2,
    width: 60,
  },
  stars: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  volumeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  volume: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    opacity: 0.6,
  },
  volumeItem: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  btnBox: {
    shadowColor: 'black',
    shadowRadius: 40,
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  priceBox: {
    backgroundColor: themeColors.bgDark,
    shadowColor: themeColors.bgDark,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
