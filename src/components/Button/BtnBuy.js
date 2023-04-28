import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../../theme/theme';

const BtnBuy = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: themeColors.bgDark,
        padding: 16,
        borderRadius: 999,
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: '600',
        }}
      >
        Pagar
      </Text>
    </TouchableOpacity>
  );
};

export default BtnBuy;
