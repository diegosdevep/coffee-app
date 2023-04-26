import { View, Text } from 'react-native';
import React from 'react';

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
      <Text style={{ color: '#864E19', fontSize: 30, fontWeight: '700' }}>
        {name}
      </Text>

      <Text style={{ color: '#864E19', fontSize: 20, fontWeight: '600' }}>
        $ {price}
      </Text>
    </View>
  );
};

export default HeaderProduct;
