import React from 'react';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { themeColors } from '../../../theme/theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size='large'
        color={themeColors.bgDark}
        animating={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Loading;
