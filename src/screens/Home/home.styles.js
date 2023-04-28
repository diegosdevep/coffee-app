import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  imgBG: {
    width: '100%',
    height: 220,
    position: 'absolute',
    opacity: 0.05,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: themeColors.bgDark,
    fontSize: 18,
    fontWeight: '700',
  },
});
