import React from 'react';
import { View, Text } from 'react-native';
import { themeColors } from '../../theme/theme';

const Description = ({ description }) => {
  return (
    <View style={{ marginTop: 30, marginHorizontal: '5%' }}>
      <Text
        style={{ fontSize: 20, fontWeight: '700', color: themeColors.bgDark }}
      >
        Descripción
      </Text>
      <Text
        style={{ marginTop: 10, color: themeColors.bgDark, fontWeight: '500' }}
      >
        {description}
      </Text>
    </View>
  );
};

export default Description;
