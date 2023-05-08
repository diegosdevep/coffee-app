import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  boxIcon: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    width: width,
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  imgItem: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: themeColors.bgDark,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
  },
  iconArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    padding: 9,
    borderColor: 'white',
  },
  iconHear: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    padding: 9,
    borderColor: 'white',
  },
  volumeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 2,
    marginTop: 30,
    marginHorizontal: '5%',
  },
  volumeBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
    gap: 5,
  },
  volume: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
    opacity: 0.6,
  },
  starsBox: {
    backgroundColor: themeColors.bgDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 6,
    width: 70,
    gap: 5,
    marginHorizontal: 20,
  },
  stars: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginHorizontal: '5%',
    marginTop: 20,
  },
  iconBag: {
    padding: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: themeColors.bgDark,
  },
});
