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
    marginHorizontal: '6%',
    gap: 5,
  },
  imgBG: {
    width: '100%',
    height: 220,
    position: 'absolute',
    opacity: 0.05,
  },
  imgLeft: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: -160,
    left: -80,
    opacity: 0.5,
  },
  imgRight: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: -160,
    right: -80,
    opacity: 0.5,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 120,
    fontWeight: '900',
    color: themeColors.bgDark,
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
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
