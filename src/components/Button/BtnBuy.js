import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../../theme/theme';
import { ShoppingBagIcon } from 'react-native-heroicons/outline';

const BtnBuy = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: themeColors.bgDark,
        padding: 15,
        borderRadius: 999,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View />
      <Text
        style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: '600',
          marginLeft: 50,
        }}
      >
        {title}
      </Text>
      <ShoppingBagIcon size='25' color='#FFF' style={{ marginRight: 10 }} />
    </TouchableOpacity>
  );
};

export default BtnBuy;
