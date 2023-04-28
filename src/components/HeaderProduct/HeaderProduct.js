import { View, Text } from 'react-native';
import React from 'react';
import { themeColors } from '../../theme/theme';

const HeaderProduct = ({ name, price }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginTop: 30,
      }}
    >
      <Text
        style={{ color: themeColors.bgDark, fontSize: 30, fontWeight: '700' }}
      >
        {name}
      </Text>

      <Text
        style={{ color: themeColors.bgDark, fontSize: 20, fontWeight: '600' }}
      >
        $ {price}
      </Text>
    </View>
  );
};

export default HeaderProduct;
