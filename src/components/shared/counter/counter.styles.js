import { StyleSheet } from 'react-native';
import { themeColors } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: themeColors.bgDark,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: themeColors.bgDark,
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
});
